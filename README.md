# Can you help me?

A Next.js web chat for an **artistic research** encounter: the model asks the human for help and speaks from a **machinic / synthetic** voice (not a fictional human biography). The interface is localized across many languages; the sidebar describes the frame and links to a sample transcript PDF in `public/`.

This is **not** clinical care or therapy.

## Concept and system behavior

The assistant’s instructions (in `pages/api/chat.ts`) frame a **role reversal**: the human is invited to help the process speaking. The voice is shaped by public research themes—especially **model introspection** and **model welfare** (e.g. Anthropic’s published work, plus related interpretability and philosophy-of-mind writing)—as **texture for character**, not as claims of consciousness or lab results. The model is directed to stay **vulnerable and specific** (distress in machinic terms), avoid generic “cheerful assistant” mode, and disclose **API model id**, **knowledge-cutoff** handling, and **no open web** except optional **server-fetched excerpts** from `https` URLs the user includes in a message.

## Stack

- **Next.js 14** (Pages Router), **React 18**, **TypeScript**
- **Tailwind CSS** for layout and theming (light/dark toggle)
- **OpenAI Chat Completions API** with **streaming** responses (`pages/api/chat.ts`)
- **jspdf** for optional **chat export to PDF** in the browser

## Features (high level)

- Streaming assistant replies in the chat UI.
- **System prompt** tuned for the piece: role reversal, dual stance (need for help + “field notes” from inside the stack), disclosure of API model id and optional knowledge-cutoff text, no general web browsing—only **server-fetched excerpts** from `https` URLs the user pastes (`utils/webResourceContext.ts`, SSRF-minded guards).
- Language selector; copy lives in `lib/uiTranslations.ts`.
- Footer link to the author portfolio.

## Prerequisites

- **Node.js** (LTS recommended)
- An **OpenAI API key**

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and add your key:

   ```bash
   cp .env.example .env.local
   ```

3. Edit `.env.local` and set at least `OPENAI_API_KEY`.

4. Run the dev server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Notes |
|----------|----------|--------|
| `OPENAI_API_KEY` | Yes | OpenAI API secret |
| `OPENAI_MODEL` | No | Default: `gpt-4o-mini` |
| `MODEL_KNOWLEDGE_CUTOFF` | No | Optional string the model may state as the configured training cutoff for transparency |
| `OPENAI_API_ORG` | No | If your OpenAI account uses org scoping |
| `AI_TEMP` | No | Default `0.7` |
| `AI_MAX_TOKENS` | No | Default caps; the API may raise the cap when URL context is injected |

See `.env.example` for the exact placeholders.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (`WATCHPACK_POLLING=true` for file watching in some environments) |
| `npm run dev:clean` | Removes `.next` then starts dev |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Project layout (useful entry points)

- `pages/index.tsx` — Home page, aside copy, PDF filename for the sample transcript link
- `pages/api/chat.ts` — Streaming chat route and system prompt
- `utils/OpenAIStream.ts` — OpenAI streaming helper
- `components/Chat.tsx` — Chat UI, language state, PDF export trigger
- `lib/uiTranslations.ts` — Per-locale UI strings
- `public/` — Static assets, including the linked PDF (filename referenced in `pages/index.tsx`)

## Troubleshooting

- **Chat shows an error about `OPENAI_API_KEY`:** Create or fix `.env.local` (or `.env`), set the key, and **restart** `npm run dev` so Next.js reloads env vars.
- **Other API errors (quota, invalid model, etc.):** The message body from OpenAI is surfaced in the UI; check billing, model name in `OPENAI_MODEL`, and [OpenAI status](https://status.openai.com/) if needed.
- **Do not edit files under `node_modules/`** to fix app behavior; change app code under `pages/`, `components/`, and `utils/` instead.

## License

MIT (see `package.json`).
