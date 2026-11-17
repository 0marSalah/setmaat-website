# Editing the members list

Founders and advisors on the website come from [`members.json`](./members.json). To update your entry:

1. Open `members.json` on GitHub and click the pencil icon (Edit this file).
2. Change your entry. Keep the quotes and commas exactly as they are.
3. Click **Commit changes** and open a pull request. The site updates once it's merged.

## Fields

| Field      | Required | What it is                                                                                  |
| ---------- | -------- | ------------------------------------------------------------------------------------------- |
| `name`     | yes      | Your full name                                                                              |
| `role`     | yes      | Short title, e.g. `"Co-founder · Engineering"` or `"AI research"`                           |
| `bio`      | yes      | Founders: three or four lines. Advisors: one or two lines.                                  |
| `initials` | no       | Shown when there's no photo. Leave `""` to use the first letters of your name.               |
| `photo`    | no       | Leave `""` to show initials. See below to add a photo.                                       |
| `links`    | no       | Founders only. A list like `[{ "label": "GitHub", "url": "https://github.com/you" }]`        |

## Adding a photo

1. Upload a square-ish photo (at least 400 × 400 px) to the [`public/members/`](../../public/members/) folder, named after you, e.g. `omar.jpg`.
2. Set `"photo": "/members/omar.jpg"` in your entry.

## Example

```json
{
  "name": "Omar Example",
  "initials": "OE",
  "role": "Co-founder · Engineering",
  "bio": "Builds the open-source tools. Before SetMaat, worked on identity systems.",
  "photo": "/members/omar.jpg",
  "links": [
    { "label": "GitHub", "url": "https://github.com/example" },
    { "label": "LinkedIn", "url": "https://linkedin.com/in/example" }
  ]
}
```

Each entry is separated from the next by a comma. The last entry in a list has no comma after it.
