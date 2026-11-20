# SetMaat website

The SetMaat co-op website: two pages of plain HTML, one stylesheet and one small script. There is no build step, no framework and nothing to install. What's in `site/` is exactly what gets served.

- **Home** (`site/index.html`): the hero with the wallet demo, Set + Maat, why we exist, principles, programs, what we're building, adopters, and the people behind the co-op.
- **What we're building** (`site/what-were-building/index.html`): the backpack, PWS Spaces and Freewallet in depth, with small interactive demos.

## Running it locally

Serve the `site/` folder with any static file server, for example:

```sh
python3 -m http.server 8000 -d site    # then open http://localhost:8000
```

To preview it exactly as Cloudflare serves it (same URL handling), run `npx wrangler dev` from the repo root.

You can also open `site/index.html` straight from disk. Everything shows, but links between the two pages need a server.

## Project layout

```
site/                          Everything that gets published
  index.html                   Home page
  what-were-building/
    index.html                 What we're building page
  styles.css                   All styles for both pages: colours, fonts, layout, motion
  site.js                      All behaviour: wallet demo, switches, scroll reveals, newsletter form
  img/                         Illustrations and logos, shared by both pages
  members/                     Member photos
  404.html                     Shown for any address that doesn't exist
  robots.txt, sitemap.xml      For search engines (see "Search engines" below)
  og-image.png                 The preview image shown when someone shares a link
  favicon.svg, apple-touch-icon.png
wrangler.jsonc                 Cloudflare settings
.github/workflows/deploy.yml   GitHub Pages copy
```

Paths inside the pages are relative (`img/wallet.svg` on the home page, `../img/wallet.svg` on the second page), so the site works at the root of setmaat.com and under `/setmaat-website/` on GitHub Pages without changes.

## Editing content

All text lives in the two HTML files. Each section starts with a comment naming it, like `<!-- Adopters -->`.

- **People:** in `site/index.html`, under `<!-- People -->`. To add someone, copy an `<article class="person">` block, change the role, name and bio, and put a square-ish photo (at least 400 × 400 px) in `site/members/`, named after them, e.g. `site/members/omar-salah.jpg`.
- **Adopters:** in `site/index.html`, under `<!-- Adopters -->`. Copy an `<li class="adopter">` block. Leave out the `<p>` if there's no description yet.
- **The two tools (PWS Spaces, Freewallet):** they appear on both pages. When their text changes, update both files.
- **The header and footer** are repeated in both pages. When you change one, change the other.
- **Colours and fonts** are set once, at the top of `site/styles.css`, as `--papyrus`, `--lapis`, `--gold` and so on.
- **Fade-in on scroll:** add `data-reveal` to any element and it fades in as it scrolls into view. Without JavaScript, or for people who turn off motion, it just shows.

## Search engines

- **One real address:** the same files are served at setmaat.com and on GitHub Pages. Each page's `<head>` has a `<link rel="canonical">` pointing to its setmaat.com address, so search engines treat setmaat.com as the real one. Keep it when you edit a page, and give any new page its own.
- **Structured data:** the `<script type="application/ld+json">` block in each page's `<head>` tells search engines that SetMaat is an organization based in Cairo, at setmaat.com. If the founders or the GitHub link change, update it in `site/index.html`.
- **Sitemap:** `site/sitemap.xml` lists every page. When you add a page, add a `<url>` for it. When a page changes a lot, update its `<lastmod>` date.
- **Link previews:** the `og:` tags in each `<head>` set the title, text and image (`site/og-image.png`, 1200 × 630) shown when someone shares a link.
- **Missing pages** get `site/404.html` with a real 404 status, so search engines don't index made-up addresses.
- **Google Search Console** (https://search.google.com/search-console): once setmaat.com is verified there, use it to see how the site shows up in Google and to ask Google to re-crawl a page after big changes.

## Deploying

Both hosts publish on every push to `main`. Nothing needs to be built first.

### Cloudflare (setmaat.com)

Cloudflare Workers Builds is connected to this repo. On every push to `main` it runs `npx wrangler deploy`, which uploads `site/` using `wrangler.jsonc`. The `name` there must match the project name in the Cloudflare dashboard (`setmaat`). Other branches get preview builds.

In the Cloudflare dashboard, under the Worker's **Settings > Build**, the **Build command** must be empty and the **Deploy command** must be `npx wrangler deploy`.

### GitHub Pages (setmaat.github.io/setmaat-website)

`.github/workflows/deploy.yml` publishes `site/` on every push to `main`. You can also run it by hand from the repo's **Actions** tab. For this to work, **Settings > Pages > Source** must be set to **GitHub Actions**.

## Still to fill in before launch

- The newsletter form isn't connected to a provider yet. It shows a "sign-ups open soon" message instead. The handler is at the top of `site/site.js`.
- Profile links for members (GitHub, LinkedIn and so on).

Placeholder links were removed rather than left pointing to `#`. When there are real pages for them, add back: links on the program cards, "Try a Space" on PWS, the footer's co-op and community links (bylaws, annual report, GitHub, forum, contact email), and a way to join the co-op.
