import { LANGUAGE_OPTIONS } from '../lib/languages'

export default function LanguageSelect({
  value,
  onChange,
  label,
}: {
  value: string
  onChange: (code: string) => void
  label: string
}) {
  return (
    <label className="flex min-h-[34px] min-w-0 items-center gap-2 text-sm text-gray-700 dark:text-zinc-300">
      {label}
      <select
        className="min-w-[11rem] max-w-full rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {LANGUAGE_OPTIONS.map(({ code, label: langLabel }) => (
          <option key={code} value={code}>
            {langLabel}
          </option>
        ))}
      </select>
    </label>
  )
}
