import { TOP_UI_LANGUAGE_CODES } from './uiTranslations'

/** Top 20 UI locales (pre-translated, instant switch). */
export const LANGUAGE_CODES = [...TOP_UI_LANGUAGE_CODES]

/** English names for the language picker — stable order and labels (no client-only Intl/sort). */
const LANGUAGE_LABEL_EN: Record<string, string> = {
  en: 'English',
  es: 'Spanish',
  zh: 'Chinese',
  hi: 'Hindi',
  ar: 'Arabic',
  fr: 'French',
  pt: 'Portuguese',
  ru: 'Russian',
  ja: 'Japanese',
  de: 'German',
  ko: 'Korean',
  it: 'Italian',
  nl: 'Dutch',
  tr: 'Turkish',
  vi: 'Vietnamese',
  id: 'Indonesian',
  pl: 'Polish',
  uk: 'Ukrainian',
  fa: 'Persian',
  th: 'Thai',
}

export const LANGUAGE_OPTIONS: readonly { code: string; label: string }[] =
  LANGUAGE_CODES.map((code) => ({
    code,
    label: LANGUAGE_LABEL_EN[code] ?? code,
  }))

export function englishLanguageName(code: string): string {
  return LANGUAGE_LABEL_EN[code] ?? code
}
