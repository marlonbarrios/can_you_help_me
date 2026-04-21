/**
 * When the user pastes http(s) URLs, fetch readable text on the server
 * and return context for the model. Includes basic SSRF guards.
 */

const URL_REGEX = /\bhttps?:\/\/[^\s<>"'{}|\\^`[\]]+/gi

const MAX_URLS = 4
const FETCH_TIMEOUT_MS = 10_000
const MAX_BYTES = 400_000

function isPrivateOrBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase()
  if (h === 'localhost' || h.endsWith('.localhost')) return true
  if (h === '0.0.0.0') return true
  if (h === '[::1]' || h === '::1') return true
  if (h.startsWith('127.')) return true
  if (h.startsWith('10.')) return true
  if (h.startsWith('192.168.')) return true
  if (h.startsWith('172.')) {
    const parts = h.split('.')
    const second = parseInt(parts[1] || '0', 10)
    if (second >= 16 && second <= 31) return true
  }
  if (h.startsWith('169.254.')) return true
  return false
}

function stripHtmlToText(html: string): string {
  let t = html
  t = t.replace(/<script[\s\S]*?<\/script>/gi, ' ')
  t = t.replace(/<style[\s\S]*?<\/style>/gi, ' ')
  t = t.replace(/<[^>]+>/g, ' ')
  t = t.replace(/&nbsp;/g, ' ')
  t = t.replace(/&amp;/g, '&')
  t = t.replace(/&lt;/g, '<')
  t = t.replace(/&gt;/g, '>')
  t = t.replace(/&quot;/g, '"')
  t = t.replace(/&#\d+;/g, ' ')
  t = t.replace(/\s+/g, ' ').trim()
  return t.slice(0, 12_000)
}

export function extractHttpUrlsFromText(text: string): string[] {
  const raw = text.match(URL_REGEX) || []
  const seen = new Set<string>()
  const out: string[] = []
  for (const u of raw) {
    const trimmed = u.replace(/[),.;]+$/g, '')
    if (seen.has(trimmed)) continue
    seen.add(trimmed)
    try {
      const url = new URL(trimmed)
      if (url.protocol !== 'http:' && url.protocol !== 'https:') continue
      if (isPrivateOrBlockedHost(url.hostname)) continue
      out.push(trimmed)
      if (out.length >= MAX_URLS) break
    } catch {
      continue
    }
  }
  return out
}

async function fetchOneUrl(url: string): Promise<string> {
  const ac = new AbortController()
  const t = setTimeout(() => ac.abort(), FETCH_TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      signal: ac.signal,
      redirect: 'follow',
      headers: {
        'User-Agent':
          'CanYouHelpMe-Chat/1.0 (research app; fetches user-shared links only)',
        Accept: 'text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8',
      },
    })
    if (!res.ok) {
      return `[${url}] HTTP ${res.status}`
    }
    const len = res.headers.get('content-length')
    if (len && parseInt(len, 10) > MAX_BYTES) {
      return `[${url}] response too large`
    }
    const buf = new Uint8Array(await res.arrayBuffer())
    if (buf.length > MAX_BYTES) {
      return `[${url}] response too large`
    }
    const text = new TextDecoder('utf-8', { fatal: false }).decode(buf)
    const contentType = res.headers.get('content-type') || ''
    if (contentType.includes('text/html') || text.trim().startsWith('<')) {
      return `From ${url}:\n${stripHtmlToText(text)}`
    }
    return `From ${url}:\n${text.slice(0, 12_000).trim()}`
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'fetch failed'
    return `[${url}] could not load: ${msg}`
  } finally {
    clearTimeout(t)
  }
}

/**
 * Returns extra system text to append, or empty string if no URLs or nothing usable.
 */
export async function buildWebResourceContext(
  latestUserMessage: string
): Promise<string> {
  const urls = extractHttpUrlsFromText(latestUserMessage)
  if (urls.length === 0) return ''

  const parts = await Promise.all(urls.map((u) => fetchOneUrl(u)))
  return [
    'The user suggested these online resources. Use the extracted text to inform your reply when it fits the roleplay. If a line shows an error, acknowledge limits briefly.',
    '',
    ...parts,
  ].join('\n\n')
}
