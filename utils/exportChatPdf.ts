import type { ChatGPTMessage } from '../components/ChatLine'
import { jsPDF } from 'jspdf'

export interface ExportChatPdfLabels {
  title: string
  fileStem: string
  roleUser: string
  roleAssistant: string
}

/**
 * Builds a multi-page PDF from chat messages and triggers download in the browser.
 */
export function downloadChatAsPdf(
  messages: ChatGPTMessage[],
  labels: ExportChatPdfLabels
): void {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 48
  const maxW = pageWidth - margin * 2
  const lineH = 12
  const blockGap = 14
  let y = margin

  const addLine = (text: string, opts?: { bold?: boolean; size?: number; rgb?: [number, number, number] }) => {
    const size = opts?.size ?? 10
    const bold = opts?.bold ?? false
    const rgb = opts?.rgb ?? [0, 0, 0]
    doc.setFont('helvetica', bold ? 'bold' : 'normal')
    doc.setFontSize(size)
    doc.setTextColor(rgb[0], rgb[1], rgb[2])
    const lines = doc.splitTextToSize(text, maxW)
    for (const line of lines as string[]) {
      if (y + lineH > pageHeight - margin) {
        doc.addPage()
        y = margin
      }
      doc.text(line, margin, y)
      y += lineH
    }
  }

  addLine(labels.title, { bold: true, size: 15 })
  y += 6
  addLine(new Date().toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }), {
    size: 9,
    rgb: [90, 90, 90],
  })
  y += blockGap

  const filtered = messages.filter((m) => m.content.trim().length > 0)

  for (const m of filtered) {
    const roleLabel =
      m.role === 'user'
        ? labels.roleUser
        : m.role === 'assistant'
          ? labels.roleAssistant
          : 'System'

    if (y + lineH * 2 > pageHeight - margin) {
      doc.addPage()
      y = margin
    }

    addLine(`${roleLabel}`, { bold: true, size: 11 })
    y += 4
    addLine(m.content.trim(), { size: 10 })
    y += blockGap
  }

  const safe =
    `${labels.fileStem}-${new Date().toISOString().slice(0, 10)}.pdf`.replace(
      /[^\w.\-]+/g,
      '-'
    )
  doc.save(safe)
}
