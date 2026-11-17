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

The build output in `dist/` is plain static files.

## Deploying (GitHub Pages)

Every push to `main` builds the site and publishes it to https://0marsalah.github.io/setmaat-website/ using `.github/workflows/deploy.yml`. You can also run it by hand from the repo's **Actions** tab.

- **One-time setup:** in the repo, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
- **Base path:** GitHub Pages serves the site from `/setmaat-website/`. The workflow passes that path to the build in `BASE_PATH`, so links, assets and member photos all resolve. You don't need to change anything if the repo is renamed or you add a custom domain.
- **Deploying without GitHub Actions:** if Actions can't run (for example, while the account has a billing hold), run `pnpm deploy:pages`. It builds the site and pushes the output to the `gh-pages` branch. For this to work, **Settings > Pages > Source** must be set to **Deploy from a branch** and the branch to `gh-pages` / `(root)`. Switch the source back to **GitHub Actions** to return to automatic deploys.
- **Check a Pages-style build locally:** `BASE_PATH=/setmaat-website/ pnpm build && BASE_PATH=/setmaat-website/ pnpm preview`, then open http://localhost:4173/setmaat-website/

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
