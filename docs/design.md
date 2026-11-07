# GOGGINS / THE GRIND

Original fan-made editorial experience. Reference: https://landonorris.com/.

## Reference inspection
The live page's text and structure were inspected: athlete-led entrance, on/off-track storytelling, extensive helmet gallery, large concluding statement. No source code, images, logos or graphics were reused in the implementation. After local browser setup, screenshots were captured at 1440x900 and 390x844, including five scroll positions. Observed: lime loading screen, minimal corner navigation, large organic linework, scattered editorial photos, serif accents, and background-tone changes through the image sequence. Initial desktop capture preceded portrait loading; mobile initially showed the loading screen. The complete hover/menu choreography and frame-by-frame scroll timing were not verified. The local reference screenshots are QA-only and excluded from source publication. Motion requirements below originate primarily in the user's supplied inventory.

## Composition
Bone-white canvas, nearly black grotesk headings, restrained red accents, narrow mono labels. Massive name, central archive portrait panel, editorial side notes and corner coordinates. The portrait becomes a smaller framed image on scroll. Quiet manifesto leads into dark photographic athlete section; an asymmetrical eight-story archive brings the page back to bone. Interactive chronology, horizontal chapters, typographic book treatments, final black manifesto.

## Motion inventory
- Hero: character entrance, scroll-scrubbed scale/position, circular pointer exposure of a contrasting photograph; tap alternative.
- Manifesto: split lines and original brushstroke SVG drawing.
- Athlete: subtle image parallax and historical statistic counting.
- Archive: staggered mask reveals, image scale on precise pointers, directional entry, filters and native accessible detail dialog.
- Navigation: full-screen modal, 50ms stagger, preview photograph, Escape/native focus containment.
- Journey: selected date updates image/text and SVG progress; arrow key navigation.
- Beyond: desktop pinned horizontal translation driven by scroll; previous/next buttons; mobile stacked panels.
- Reduced motion: no smooth scroll, pins, parallax or pointer tracking; all information remains available.
- GSAP owns scroll effects. CSS owns button/image hover and dialog entry. Lenis uses GSAP ticker and is destroyed on cleanup.

## Asset strategy
Public-domain U.S. Navy images from Wikimedia Commons, locally optimized WebP. Repeated archive photographs are labeled by their actual event, never passed off as eight unique documentary moments. Book treatments are original typographic panels, not reproduced covers. See public/credits.json and the on-page credits disclosure. A new licensed studio portrait can replace the hero asset without changing the component.

## November 2026 refinement
Motion for React now owns the hero's reversible spring-driven wavy reveal, while GSAP retains the outer scroll composition. An irregular 41-point contour is shared by complementary image masks so the two photographs never expose a seam. The original circle has been replaced with flowing SVG contour paths. Modern 2018 running portrait and 2009 Navy portrait share a top-of-head anchor and comparable face scale; source dates are explicit. Controls include mouse glide, native range slider, keyboard, and endpoint buttons. Reduced motion jumps directly to the selected reveal. Missing Navy images leave the athlete visible and disable the unavailable state.

The gallery now uses eight distinct images. Additional 2018 documentary stills are attributed to Austin Rooney, Jonathan Snyder, and Alexa Trafton, DVIDS 646927. No claim is made that these are present-day photographs. Full source video is not shipped: only optimized stills. Source dates and alt text come from the photoInfo manifest.


## Hero restoration and scroll-led journey
The opening composition restores the original full-height 2007 Badwater runner, without background contour decoration or a cropped bust. A spring-driven irregular wave reveals the Navy SEAL portrait on pointer movement or scrolling; touch and keyboard controls remain available. The journey pins below the header and advances through six milestones with short fades as visitors scroll in either direction. Year buttons still support direct selection and arrow keys. Reduced-motion visitors receive an unpinned timeline and static portrait changes.


## Running-photo reveal and horizontal journey
The hero now restores the original full-screen Badwater running photograph with the editorial phrase THE WORK IS THE WAY. An irregular wave wipe replaces the old circular lens. The range slider is removed; pointer movement, scroll and a discrete reveal toggle provide access. The journey is a continuous horizontal strip driven by scrolling, with touch swipes, sideways wheel input and year buttons. The 2022 chapter shows Never Finished artwork. Both books use official promotional cover images from davidgoggins.com/book/; credits distinguish their copyright from the public-domain Navy photography.


## Cursor-only scratch reveal
The hero reveal is now a local organic mask following mouse position with a short tapered trail. It has no scroll handler, toggle or slider. The running-photo layer is offset to keep the revealed runner near the foreground face. Animation settles and stops requesting frames at rest; pointer exit closes the mask. Reduced motion removes follow lag and trails. Coarse-pointer screens retain the static hero and normal page scrolling.


## Thin moving-only scratch
The reveal is now a narrow wavy ribbon, roughly 220 by 35 pixels at full size, with four short trailing samples. Mouse movement opens it; after 90 ms without movement it contracts smoothly to nothing. A fine dashed wave animates at the last pointer location while idle. Both effects clear on exit or loss of visibility. Idle animation pauses when hidden and is disabled for reduced motion.


## Fluid ribbon and continuous contour lines
The cursor reveal uses four continuous cubic curves to form a gently rippling liquid ribbon, sized at 28% of the viewport width up to 440 pixels. It follows movement with damping and recedes at rest. Seven subtle contour lines drift continuously over the viewport across every section, independently of pointer input or scrolling. Their transform animations run on two slow loops and respect reduced-motion preferences. The decorative overlay never intercepts pointer input.


## Liquid-ink wake replaces the geometric ribbon
The hero now uses a velocity-field simulation with semi-Lagrangian advection, pressure projection and vorticity confinement. Pointer motion injects dye and velocity; the resulting wake curls and dissipates over the existing running-photo scene. The simulation uses a bounded low-resolution field while compositing the photo at display resolution. It stops after dissipation, offscreen, or on hidden tabs. Coarse-pointer devices retain the static hero. Reduced motion suppresses fluid advection.
Background contour paths now morph continuously through multiple shapes, with highlights travelling along them. Reduced-motion settings pause SVG morphing and remove the travelling highlights. The reference site uses a custom fluid-velocity effect integrated with its 3D assets; this implementation is an original liquid-ink interpretation for the Goggins photography, not a pixel-identical reproduction.


## Water surface and scroll reveal
Replaced the CPU dye simulation and its 30 fps cap with a full-resolution, crisp water-surface trail. A bounded recent pointer history produces a smooth curved surface, slight image refraction and a fine light rim. It runs on requestAnimationFrame without low-resolution masks or blur. Scroll pins the full-size hero and reveals the orange running-photo scene through a rising wave, then releases into the next section; reverse scrolling restores the front scene. Reduced motion uses a simple opacity reveal. The official book cover artwork remains in place and both assets were verified in browser checks. A 4x CPU-throttled Chromium sample measured median frame interval 16.7 ms and p95 33.4 ms, not a guarantee across physical devices.
