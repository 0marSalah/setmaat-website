# SetMaat website

The SetMaat co-op website: a single page built with Vite, React and TypeScript.

## Getting started

This project uses [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev          # http://localhost:5173
```

| Script         | What it does                                     |
| -------------- | ------------------------------------------------ |
| `pnpm dev`     | Start the dev server with hot reload             |
| `pnpm build`   | Type-check and build the static site to `dist/`  |
| `pnpm preview` | Serve the built `dist/` folder locally           |
| `pnpm lint`    | Lint with oxlint                                 |

The build output in `dist/` is plain static files. You can host it on any static host, such as Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Project layout

```
index.html              Page shell: title, meta, favicon, Google Fonts
public/favicon.svg      Logo used as the favicon
public/members/         Member photos
src/
  main.tsx              Entry point
  App.tsx               Page sections, in order
  styles/global.css     Colour/font tokens, base styles, buttons, shared section layout
  assets/               Background patterns (frieze, stars)
  components/           One component per section, each with its own CSS file
  data/                 The site's content (see below)
```

## Editing content

Most copy lives in `src/data/`, so you can change it without touching the components:

- `members.json`: founders and advisors. Members can edit their own entry on GitHub. Send them the link to [`src/data/README.md`](src/data/README.md), which explains the fields and how to add a photo. `pnpm build` fails if an entry is missing a required field.
- `projects.ts`: the "What we're building" projects (Freewallet, PWS Spaces).
- `programs.ts`: the three programs.
- `principles.ts`: the gold principles strip.

The hero, "Why SetMaat", and footer text live in their own components under `src/components/`.

## Still to fill in before launch

- Founder and advisor details in `src/data/members.json`
- `[MEMBERSHIP FEE / TERMS]` in `src/components/Members.tsx`
- `[EMAIL]` in `src/components/Footer.tsx`
- Links that still point to `#`: the programs, "View the code", "Try a Space", "Apply to join", member links, and the footer links
- The newsletter form in `src/components/Footer.tsx`, which isn't connected to a provider yet
- The "Preview: not live yet" badge, which you can remove from `src/App.tsx`
