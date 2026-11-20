# Tools in Orbit: redesign mockup

`tools-in-orbit.html` is a self-contained, static mockup of the chosen redesign direction for setmaat.com. It is a design reference for the coming React work, not production code, and nothing in `src/` has changed yet.

## How to view

- With the dev server: run `pnpm dev`, then open http://localhost:5173/mockups/tools-in-orbit.html
- Without it: open `mockups/tools-in-orbit.html` in a browser. The member photos load from `mockups/members/`.

## What it covers

- Every section of the live site, in the same order and with the live site's text word for word
- The SetMaat palette (papyrus, ink, lapis, gold, faience), Big Shoulders and Inter, and the lotus logo
- A hero with a looping wallet demo: unlock with a passkey, approve an app's request, then revoke it
- An interactive backpack: tap it to unpack PWS Spaces, Freewallet and your data, then drag them back in
- The Set + Maat balance scale, the gold principles strip, and portrait cards for the people
- Responsive layouts down to phone width, with motion that turns off under `prefers-reduced-motion`

## Notes

- Kholoud Fattem's bio uses the newer text from the live site; `src/data/members.json` still has the older one.
- The phone and backpack screens show placeholder sample data such as "128 files" and "3 apps".
