# David Goggins — The Grind

An immersive, unofficial David Goggins tribute website created by **Armaan Manwatkar**. It brings together endurance photography, an interactive career timeline, books, and original editorial writing in a responsive experience built around expressive typography and motion.

**Live website:** [GOGGINS — THE GRIND](https://armaandavidgoggins.vercel.app/)

**Repository:** [Armaan-30/David-Goggins-Website-](https://github.com/Armaan-30/David-Goggins-Website-)

The live website is hosted on Vercel. This repository contains the source code; GitHub Pages hosting is not automatically enabled.

## Features

- **Interactive hero:** a full-height running silhouette with oversized type. Moving the mouse reveals the orange photograph through a curved water-like trail with a crisp edge and subtle refraction.
- **Scroll reveal:** the hero stays full-size while a rising wave uncovers the orange running photo and “THE WORK IS THE WAY.” Scrolling backwards restores the opening scene.
- **Continuous contour lines:** subtle SVG curves morph across the viewport, with highlights travelling along them throughout the site.
- **Mindset and athletic achievements:** editorial sections, image movement, a reading-progress indicator, and animated statistics.
- **Filterable archive:** eight photographic stories organised into Endurance, Discipline, and Mindset, with native dialog-based detail views and previous/next navigation.
- **Horizontal journey:** six milestones from 2001 to 2022. Scrolling advances the panels; year buttons, arrow keys, touch swipes, and sideways wheel input provide additional navigation.
- **Beyond the limits:** four chapters about training, growth, writing, and impact, with a pinned horizontal presentation on larger screens.
- **Books:** supplied transparent mockups for *Can’t Hurt Me* and *Never Finished*, linked to the author's official book page.
- **Responsive navigation:** a full-screen menu, anchor navigation, keyboard focus handling, and Escape-to-close dialogs.
- **Creator credit:** “Created by Armaan Manwatkar” at the end of the page.

## Tech stack

### Application

- **Next.js 16 / App Router** — page composition, metadata, image components, and static export.
- **React 19** — reusable components, interaction state, refs, and lifecycle cleanup.
- **TypeScript 5** — typed application code and `tsc --noEmit` checks.
- **Tailwind CSS 4 and PostCSS** — styling tooling. Most of the visual design is implemented through custom CSS in `app/globals.css` and `app/hero-portrait.css`.

### Animation

- **GSAP 3 + ScrollTrigger** — pinned sections, scroll progress, the hero reveal, timeline movement, entrance effects, and counters.
- **Lenis** — smooth wheel scrolling, integrated with GSAP's ticker and ScrollTrigger updates.
- **Motion for React 12** — reduced-motion detection through `motion/react`.
- **Canvas 2D + requestAnimationFrame** — the custom cursor water-surface reveal. It uses a bounded pointer history, curved clipping paths, cached photography, and a small refraction offset. It is a visual water effect, not a full physical water simulation; WebGL is not required.
- **SVG and CSS** — the runner cutout, continuously morphing contour lines, and travelling line highlights.

### Tooling and assets

- **Playwright** — browser checks for navigation, responsive layout, the timeline, hero reveal, and reduced motion.
- **ESLint 9 + eslint-config-next** — lint configuration.
- **Sharp** — image preparation tooling; not an application backend.
- **Local Barlow Condensed font**, WebP archive photographs, and transparent PNG book mockups.
- **npm + package-lock.json** — reproducible dependency installation. See the lockfile for exact resolved versions.

## Run locally

Use Node.js **22 or 24** and npm. The application does not require API keys, a database, or an `.env` file.

```bash
git clone https://github.com/Armaan-30/David-Goggins-Website-.git
cd David-Goggins-Website-
npm ci
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). The development script binds to `127.0.0.1` by default.

## Build and preview

```bash
npm run typecheck
npm run lint
npm run build
```

`next.config.ts` enables `output: 'export'`, unoptimized images, and trailing slashes. The production website is generated in **`out/`**.

Serve that directory with any static file server. For example, if Python is installed:

```bash
python -m http.server 3000 --directory out
```

The `npm start` script invokes `next start`; it is not the production preview command for this static-export configuration. Serve `out/` instead.

## Browser verification

Install the Playwright Chromium browser once:

```bash
npx playwright install chromium
```

Keep `npm run dev` running in one terminal, then run these checks in another:

```bash
node scripts/browser-check.mjs
node scripts/water-scroll-check.mjs
node scripts/journey-check.mjs
```

- `browser-check.mjs` covers desktop, tablet, and mobile layouts, menu navigation, Escape handling, gallery filtering, story dialogs, and timeline keyboard controls.
- `water-scroll-check.mjs` checks the cursor reveal, pinned orange transition in both directions, full-size hero, supplied cover images, responsive overflow, and reduced-motion behaviour.
- `journey-check.mjs` checks automatic timeline progression forwards and backwards and viewport fit.
- `cursor-check.mjs` and `hero-check.mjs` are convenience entry points to the current hero checks.

Screenshots are saved to the ignored `qa/` directory. Browser emulation helps verify behaviour but does not replace testing on physical phones and lower-powered devices.

## Project structure

```text
app/
  page.tsx             Main page, sections, navigation, dialogs, scroll interactions
  layout.tsx           Root layout, metadata, styles, global contour overlay
  data.ts              Stories, milestones, photo descriptions, source links
  hero-portrait.tsx    Runner silhouette and pinned orange scroll reveal
  liquid-wake.ts       Canvas water-surface cursor effect and lifecycle cleanup
  fluid-lines.tsx      Continuous SVG contour animation
  globals.css          Main visual system and responsive styles
  hero-portrait.css    Hero reveal and contour styling
public/
  images/              Archive photography and book mockups
  fonts/               Local font and SIL Open Font License
  credits.json         Asset provenance and rights notes
scripts/               Browser verification and development utilities
docs/design.md         Design notes and implementation history
.openai/hosting.json    Existing Sites deployment identity and static output path
next.config.ts         Static-export settings
```

`reference-check.mjs` is an optional reference-site inspection utility, not an application test. `archive-frames.mjs` is a development helper that expects an independently obtained interview video in the system temporary directory; that video is not bundled or required to run the site.

## Customisation

- Edit story text, milestone dates, image references, and source URLs in **`app/data.ts`**.
- Edit sections, book metadata, navigation labels, and the creator credit in **`app/page.tsx`**.
- Adjust colours, spacing, typography, and breakpoints in **`app/globals.css`**.
- Tune the hero scroll distance and reveal shape in **`app/hero-portrait.tsx`**.
- Tune pointer trail width, lifetime, and refraction in **`app/liquid-wake.ts`**.
- Replace book images in **`public/images/cant-hurt-me-mockup.png`** and **`public/images/never-finished-mockup.png`**. Preserve transparency and update attribution if the artwork changes.

## Accessibility and performance

The site includes a skip link, labelled controls, keyboard-operated timeline tabs, native dialogs, descriptive image text, and visible focus styles. The decorative contour overlay does not intercept clicks.

Reduced-motion preferences pause the continuous contour animation, simplify the hero reveal, and remove several scroll-driven effects. The cursor effect is intended for fine mouse pointers; touch devices retain normal scrolling and the orange scroll reveal.

The water effect avoids the earlier low-resolution dye simulation. It uses a bounded trail and stops drawing when the trail expires or leaves view. Gallery and decorative animation work is cleaned up when components unmount.

## Deployment

This is a **static frontend**: there are no API routes, server actions, accounts, payments, or persistent application data.

Run `npm ci` and `npm run build`, then deploy the contents of `out/` to a static host. Keep image and font paths intact. Hosting beneath a repository subpath, such as GitHub Pages project hosting, requires configuring the appropriate Next.js base path and checking asset URLs before deployment.

The website is currently deployed on Vercel. `.openai/hosting.json` records the original Sites deployment's project identifier and `out` directory; it contains no credentials. For a separate Sites deployment, obtain your own project identifier rather than reusing the existing one. Building locally does not require the Sites plugin.

## Credits, sources, and rights

- Website creator: **Armaan Manwatkar**.
- Visual and interaction inspiration: [Lando Norris's website](https://landonorris.com/). This project implements its own interpretation for different photographs and content.
- Archive photography: U.S. Navy and Defense Media Activity sources; see [`public/credits.json`](public/credits.json) and the website's expanded credits.
- Book mockups: supplied for this project. Book artwork and associated rights remain with their respective owners.
- Typeface: Barlow Condensed, under the [SIL Open Font License](public/fonts/OFL.txt).
- Achievement and book links point to [David Goggins's official website](https://davidgoggins.com/).

This is an **unofficial fan-made tribute**, not affiliated with or endorsed by David Goggins. Editorial reflections are original site copy and are not presented as quotations from him. Historical records are identified by their dates.

The repository source is provided under the existing [MIT License](LICENSE). Third-party photographs, book artwork, and fonts retain their own rights and licence terms; the source-code licence does not grant additional rights to those assets.
