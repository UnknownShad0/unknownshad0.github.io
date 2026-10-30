# Portfolio Styling Guide

Reviewed: October 31, 2026

## Purpose

This document describes the portfolio's complete visual system as it currently exists. It covers the
global design language, typography, colors, spacing, responsive behavior, animation, icons,
accessibility styling, and the individual treatment of every visible section.

The review includes:

- `src/App.jsx`
- Global styles and application setup
- Shared components
- Every page section
- Shared motion configuration
- Portfolio data that affects presentation
- HTML metadata, fonts, and theme color
- Styling-related dependencies

This is a reference document only. It does not change the current interface.

## Visual identity summary

The portfolio uses a **minimalist editorial** style with the following characteristics:

- A nearly monochrome palette built from white, black, and Tailwind gray values.
- Large Playfair Display section headings that provide an editorial or résumé-like personality.
- Inter for readable body content and interface labels.
- Large rounded containers with prominent shadows instead of strong background color blocks.
- Project and certificate imagery as the main visual content.
- Small, restrained entrance animations and hover movement.
- Very little branding color, allowing the profile, project screenshots, and certificates to stand
  out.

The overall impression is clean, personal, and professional. Its strongest recurring motifs are
rounded corners, soft shadows, grayscale text, oversized headings, and spacious section containers.

## Styling foundation

| Area                       | Current implementation                     |
| -------------------------- | ------------------------------------------ |
| CSS framework              | Tailwind CSS 4 through `@tailwindcss/vite` |
| Global stylesheet          | `src/index.css`                            |
| Component styling          | Utility classes directly in JSX            |
| Display font               | Playfair Display                           |
| Body font                  | Inter                                      |
| Animation                  | Framer Motion and CSS transitions          |
| Accessible dialogs         | Headless UI                                |
| Interface icons            | Heroicons                                  |
| Brand and technology icons | React Icons                                |

There is no separate Tailwind configuration file and no custom token file for colors, radii,
shadows, or spacing. The project currently uses Tailwind's default design scale directly.

## Color system

### Primary palette

| Purpose         | Typical classes                  | Visual role                                          |
| --------------- | -------------------------------- | ---------------------------------------------------- |
| Main background | `bg-white`                       | Keeps the page bright and minimal                    |
| Main text       | `text-black`, `text-gray-900`    | Titles and high-emphasis content                     |
| Supporting text | `text-gray-600`, `text-gray-700` | Descriptions and secondary information               |
| Muted text      | `text-gray-400`, `text-gray-500` | Icons, counters, and tertiary labels                 |
| Soft surfaces   | `bg-gray-50`                     | Technology items, certificate stage, icon containers |
| Borders         | `border-gray-200`, `bg-gray-300` | Cards, dividers, dots, and timeline connectors       |
| Modal backdrop  | `bg-black/70`                    | Project and certificate overlays                     |
| Mobile backdrop | `bg-black/20`                    | Mobile navigation overlay                            |

### Color character

The palette is intentionally neutral. There is no persistent accent color for links, buttons, active
states, or section identification. Interaction is communicated through movement, opacity, shadows,
underlines, and changes between gray values.

This works with the existing understated design, but it also means focus, hover, and active states
must remain especially clear because color is not doing much of that work.

### Contrast concern

Section headings use `opacity-25` on black text over white. This produces a very light gray with low
contrast. The oversized type makes the headings visually recognizable, but opacity alone does not
meet normal text contrast expectations. If accessibility becomes a priority, consider replacing
`opacity-25` with a solid color such as `text-gray-400` or `text-gray-500` and verify the final
contrast.

## Typography

### Font roles

| Role                                | Font                                 | Current treatment                    |
| ----------------------------------- | ------------------------------------ | ------------------------------------ |
| Section and navigation display text | Playfair Display                     | `.font-play`, generally bold         |
| Body copy                           | Inter                                | Global `body` font                   |
| Technology labels                   | Inter inside a `font-mono` container | Small labels paired with large icons |
| Timeline details                    | Inter                                | Mostly `text-xs` with semibold dates |

### Type scale

The main section heading component uses:

- Mobile: `text-3xl`
- Small screens: `sm:text-5xl`
- Large screens: `lg:text-8xl`
- Weight: `font-bold`
- Alignment: centered
- Opacity: 25%

Other common sizes are:

- `text-2xl` for modal and large subsection titles.
- `text-xl` for project titles.
- `text-lg` for card and category headings.
- `text-base` for About copy.
- `text-sm` for navigation, footer content, and labels.
- `text-xs` for technology names, dates, timeline descriptions, counters, and helper text.

### Font loading issue

The Google Fonts request loads Inter weights `400`, `500`, and `700`, but the UI frequently uses
`font-semibold`, which maps to weight `600`. Browsers will synthesize that weight. To make typography
more consistent across browsers, add Inter `600` to the font request or replace semibold usage with
one of the loaded weights.

## Layout system

### Page-level widths

The layout is centered and changes its maximum width at three main breakpoints.

| Region                   | Base                     | `sm`                     | `lg`                      |
| ------------------------ | ------------------------ | ------------------------ | ------------------------- |
| Header wrapper           | `max-w-sm`               | `max-w-3xl`              | `max-w-6xl`               |
| Content section wrappers | `max-w-sm`               | `max-w-2xl`              | `max-w-7xl`               |
| Cover content            | No base maximum on image | Inner content `max-w-xl` | `max-w-7xl`               |
| Footer                   | Full width               | Full width               | Inner content `max-w-7xl` |

This produces a compact mobile layout, a deliberately narrow tablet presentation, and a wide
desktop portfolio.

### Section rhythm

Visible page sections are separated by:

- `mb-5` on base and small screens.
- `lg:mb-8` on large screens.
- `p-4` inside the section components.
- `mt-8` between each section heading and its main content.

The cover has a larger `mb-10`, separating the introductory image from the content sections.

### Container treatment

The most common content container pattern is:

```text
rounded-3xl + responsive padding + shadow-2xl
```

Inner cards usually use:

```text
rounded-lg/rounded-xl/rounded-2xl + shadow/shadow-xl + white background
```

The result is a layered card system: large shadowed section surfaces contain smaller cards or
interactive images.

## Spacing system

Common spacing values are:

| Use                               | Typical values                         |
| --------------------------------- | -------------------------------------- |
| Section padding                   | `p-4`                                  |
| Mobile content container padding  | `p-4` or `p-5`                         |
| Tablet content container padding  | `sm:p-6` or `sm:p-8`                   |
| Desktop content container padding | `lg:p-8` or `lg:p-10`                  |
| Grid gaps                         | `gap-5`, `gap-6`, `gap-8`, `lg:gap-10` |
| Text grouping                     | `space-y-1`, `space-y-2`, `space-y-4`  |
| Card padding                      | `p-4`, `p-5`, or `p-6`                 |

The spacing is generous on desktop and was specifically reduced on mobile for timelines,
technology cards, and project cards.

## Corners, borders, and shadows

### Border radius hierarchy

| Element                             | Radius                        |
| ----------------------------------- | ----------------------------- |
| Major section containers            | `rounded-3xl`                 |
| Timeline cards and modal panels     | `rounded-2xl`                 |
| Project cards and certificate stage | `rounded-xl` or `rounded-2xl` |
| Profile and content images          | `rounded-lg`                  |
| Icon controls and navigation dots   | `rounded-full`                |

### Shadow hierarchy

| Level        | Usage                                    |
| ------------ | ---------------------------------------- |
| `shadow-sm`  | Small controls and subtle separation     |
| `shadow`     | Timeline cards and project cards         |
| `shadow-lg`  | Certificate images and hover emphasis    |
| `shadow-xl`  | Profile card and mobile navigation       |
| `shadow-2xl` | Main section containers and modal panels |

The portfolio relies heavily on shadows. Because most surfaces are white, shadow depth is the
primary way the interface distinguishes nested layers.

## Responsive behavior

Tailwind's default breakpoints are used:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Responsive matrix

| Section        | Mobile                                | Tablet                                   | Desktop                                        |
| -------------- | ------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| Header         | Menu button and full-width slide-over | Same mobile navigation                   | Centered horizontal navigation at `lg`         |
| Cover          | Fluid image with 1rem padding         | Fluid image                              | Maximum width of `7xl`                         |
| About          | Profile card and copy stacked         | Profile/details split internally at `md` | Profile card and About copy become two columns |
| Experience     | Education and career stacked          | Two columns beginning at `sm`            | Two wide timeline columns                      |
| Technologies   | One category per row                  | Two category columns                     | Three category columns                         |
| Projects       | One project per row                   | One project per row until `md`           | Two project columns                            |
| Certifications | 4:3 carousel stage                    | 16:10 stage                              | Wide 16:10 stage                               |
| Footer         | One column                            | Two columns                              | Three columns                                  |

### Mobile-specific styling

- Section content remains inside a `max-w-sm` wrapper.
- Mobile cards use reduced padding.
- Project overlays stay visible on touch-sized screens because hover is unavailable.
- Gallery close and arrow controls are placed inside the image area on mobile.
- Long email addresses use wrapping or `break-all`.
- Certificate slides support horizontal dragging.
- The navigation panel occupies the full width below `sm` and caps at `max-w-sm` above it.

### Responsive concern

Experience changes to two columns at `sm` while the overall wrapper is only `max-w-2xl`. This can
make the timeline cards narrow near 640px, especially for long career descriptions. Moving that
split to `md` would give the timeline more breathing room without affecting the desktop design.

## Motion and interaction language

### Shared motion tokens

`src/config/motion.js` provides four reusable entrance styles:

- Fade: opacity only.
- Slide left: 40px horizontal travel.
- Slide right: 40px horizontal travel.
- Slide up: 32px vertical travel.

Shared motion settings include:

- Scroll animations run once.
- Animations start when 20% of an element is visible.
- Stagger delay is 0.12 seconds.
- The main easing curve is `[0.16, 1, 0.3, 1]`, a smooth ease-out curve.
- Dialog transition duration is 0.22 seconds.

### Component motion

| Area            | Motion behavior                                                     |
| --------------- | ------------------------------------------------------------------- |
| Mobile menu     | Backdrop fade and right-to-left panel slide                         |
| About card      | Fade-in and slight hover lift                                       |
| About copy      | Typewriter effect with a reduced-motion static fallback             |
| Timeline        | Staggered right-to-left card entrances and slight hover lift        |
| Technologies    | Left, fade, and right entrances by column                           |
| Projects        | Staggered upward entrances and image hover zoom                     |
| Project gallery | Direction-aware image transitions                                   |
| Certifications  | Direction-aware carousel slide, drag gesture, and image hover scale |
| Dialogs         | Backdrop fade and panel scale/fade                                  |

### Reduced motion

Reduced motion is handled in two layers:

1. `MotionConfig reducedMotion="user"` tells Framer Motion to respect the operating-system setting.
2. A global `prefers-reduced-motion` media query reduces CSS animations and transitions to 0.01ms.

The About typewriter is replaced by fully rendered static text when reduced motion is enabled.

This is one of the strongest parts of the current styling system.

## Component and section styling audit

### Header

- White background and no persistent border or shadow.
- Playfair Display is used for desktop navigation.
- Desktop links are small, semibold, and spaced with `gap-x-12`.
- Hover is communicated by reduced opacity.
- Mobile navigation uses a white slide-over panel with a light black backdrop.
- Menu icons use the 24px Heroicons outline family.

The header is intentionally quiet so it does not compete with the cover image.

### Cover and Hero

- The cover image is fluid, rounded with `rounded-3xl`, padded by 1rem, and displayed at 70% opacity.
- A Hero section is positioned over the image, but its heading and call-to-action are currently
  commented out.
- This means the cover is visually decorative and the page currently has no visible primary `h1`.

For stronger hierarchy and accessibility, a short visible name or role could be restored without
changing the overall style.

### Section headings

- Centralized through `SectionHeading`.
- Use Playfair Display, bold weight, centered alignment, responsive scaling, and 25% opacity.
- Their large scale works as a recurring visual anchor.

The heading treatment is consistent, but its low contrast is the clearest accessibility concern in
the current visual system.

### About

- Uses a two-part layout: profile information and narrative copy.
- The profile card is white, shadowed, rounded, and gently lifts on hover.
- Profile information is represented as a description list with 1rem vertical spacing.
- The image and details split internally at `md`.
- The overall About section splits into two columns at `lg`.
- The narrative uses comfortable `text-base` sizing and `leading-relaxed`.
- Important qualities are emphasized using semibold black text.
- The original typewriter effect is preserved.

The typewriter and static reduced-motion copy are maintained separately, so copy changes must be
made in two places.

### Education and Career

- The section is a large white panel with a subtle border and strong shadow.
- Education and career use separate columns and matching timeline styling.
- Circular gray-black markers are connected by a 2px gray line.
- Timeline cards use white backgrounds, `rounded-2xl`, responsive padding, and subtle hover lift.
- Career descriptions use small bullet lists.
- Education and career icons sit inside soft gray rounded boxes.

The visual timeline is clear, although `text-xs` descriptions may be difficult to read on some
devices.

### Technologies

- Three major category cards: Frontend, Backend, and Others.
- Each category uses a rounded, shadowed container with a 5% hover scale.
- Individual skills are white rounded tiles with a black icon and small black label.
- Technology icons are visually dominant at `text-3xl`.
- SQL uses a generic database icon and REST API uses a generic API icon.

The technology section is one of the densest parts of the page. A 5% scale on large category cards
is stronger than other hover movement and may feel inconsistent with the subtler 1% project and
timeline treatments.

### Projects

- Project cards display large screenshots with a dark gradient overlay.
- Overlay text is always visible on mobile and appears on hover or keyboard focus from `md` upward.
- Cards use a small upward hover translation and stronger shadow.
- Image zoom is limited to 5%.
- The photo count appears in a white pill at the upper-right corner.
- The project gallery uses a dark overlay, large image stage, directional transitions, and a
  horizontally scrollable thumbnail strip.

The mobile controls use smaller padding and remain within the image area. Desktop controls move
outward for a more spacious gallery presentation.

### Certifications

- Uses a single-slide carousel instead of a multi-card grid.
- The carousel inherits the full width of the section wrapper.
- The image stage uses a light gray background, subtle border, and rounded corners.
- Mobile uses a 4:3 stage; larger screens use 16:10.
- Certificates use `object-contain` so their original proportions are preserved.
- Navigation includes previous/next buttons, an announced counter, and active pagination dots.
- Slides support keyboard arrows and horizontal dragging.
- Clicking or tapping a slide opens a white modal panel.

The carousel fits the mixed certificate dimensions better than equal-size cards. The caption row
currently contains an empty secondary `<span>` and can be simplified.

### Footer

- Uses a three-part information structure: Navigation, Resume, and Get in touch.
- Text is small and neutral, with darker hover colors.
- The copyright area is separated by a light top border.
- GitHub is the only social icon and uses a neutral gray treatment.
- The footer follows the same `max-w-7xl` desktop alignment as the main content.

## Icons and imagery

### Icon system

- Heroicons outline icons are used for menus, dialog controls, arrows, email, and download actions.
- React Icons provides GitHub, technology brands, education, career, and About download icons.
- Interactive icons are paired with visible text or screen-reader labels.
- Decorative icons use `aria-hidden="true"`.

### Image treatment

- Profile image: fluid width, maximum width `sm`, rounded corners.
- Cover image: decorative, reduced opacity, large rounded corners.
- Project images: cropped with `object-cover` in cards and contained in the modal.
- Certificates: contained rather than cropped to preserve document content.
- Thumbnails: square, cropped, and horizontally scrollable.

Image assets are JPG or PNG. WebP or AVIF versions could reduce download size without changing the
visual design.

## Accessibility styling

Current strengths include:

- Visible focus outlines on most custom interactive controls.
- Screen-reader labels for icon-only buttons.
- Accessible dialogs with focus management and Escape-to-close behavior.
- Keyboard navigation for galleries and the certificate carousel.
- Reduced-motion handling across CSS, Framer Motion, and the typewriter effect.
- Touch-visible project descriptions.
- Wrapping protection for long email addresses.

Areas to improve include:

- Increase section-heading contrast.
- Restore a meaningful visible page-level `h1`.
- Increase timeline description text from `text-xs` where space allows.
- Add explicit focus styling to every text link for complete consistency.
- Change the Technologies category headings from `h1` to lower-level headings so the visual and
  semantic hierarchy match.

## Current inconsistencies and risks

### High priority

1. **Section-heading contrast:** `opacity-25` is visually subtle but too faint for important heading
   text.
2. **Missing primary heading:** the Hero `h1` is empty because its content is commented out.
3. **Font-weight mismatch:** Inter 600 is used but not downloaded.

### Medium priority

1. **Tablet timeline density:** Experience becomes two columns at `sm`, which can make long timeline
   cards narrow.
2. **Small timeline copy:** career descriptions use `text-xs` even on large screens.
3. **Hover-scale inconsistency:** Technology category cards scale to 105%, while most other cards use
   much smaller movement.
4. **Duplicated About copy:** the typewriter HTML and reduced-motion JSX can drift apart.
5. **Repeated section wrappers:** `App.jsx` repeats similar maximum-width and margin classes, making
   future styling changes easy to apply inconsistently.

### Low priority

1. The header uses `max-w-6xl` while content sections use `max-w-7xl`; this may be intentional but is
   not documented as a design decision.
2. The certificate caption contains an empty secondary span.
3. The palette has no accent color, so interactive states depend heavily on movement and gray-value
   changes.
4. Several components use arbitrary values such as `mb-[2%]` and negative outline offsets.

## Rules for future styling changes

To preserve the current design language:

1. Keep the palette primarily white, black, and neutral gray.
2. Use Playfair Display only for navigation or display-level headings.
3. Use Inter for body content, labels, dates, and controls.
4. Reserve `rounded-3xl` for major containers and `rounded-xl` or `rounded-2xl` for inner cards.
5. Use strong shadows on section containers and lighter shadows on inner cards.
6. Prefer small hover lifts or 1–2% scaling over large transforms.
7. Use the shared Framer Motion variants and easing curve.
8. Every new animation must respect reduced-motion preferences.
9. Make hover-only information visible on touch devices.
10. Keep icon-only controls at least 40–44px in effective touch size.
11. Use `object-cover` for portfolio screenshots and `object-contain` for documents or certificates.
12. Test layouts at 320px, 375px, 640px, 768px, 1024px, and 1280px widths.

## Suggested design tokens

The project does not yet define custom tokens. If the styling grows, these conceptual tokens would
capture the existing system:

```text
Page background:       white
Primary text:          gray-900 / black
Secondary text:        gray-600 / gray-700
Muted text:            gray-400 / gray-500
Subtle surface:        gray-50
Border:                gray-200
Timeline line:         gray-300
Modal backdrop:        black at 70%
Major radius:          1.5rem (rounded-3xl)
Card radius:           1rem (rounded-2xl)
Image radius:          0.5rem (rounded-lg)
Fast transition:       200ms
Standard transition:   300ms
Entrance transition:   500–650ms
Primary easing:        [0.16, 1, 0.3, 1]
```

These could later be represented with Tailwind theme variables or small reusable component classes.

## Styling QA checklist

Before merging future visual changes, verify:

- The page has no horizontal overflow at 320px.
- Section headings remain readable at every breakpoint.
- Email addresses and long project text wrap safely.
- Mobile users can see information that desktop users receive on hover.
- Dialog close and navigation controls stay within the viewport.
- Keyboard focus is clearly visible.
- Arrow keys work in both galleries and carousels.
- Reduced-motion mode shows complete content immediately.
- Images preserve the correct crop or contain behavior.
- Shadows and rounded corners follow the established hierarchy.
- `npm run lint` passes.
- `npm run build` passes.

## Overall assessment

The portfolio has a coherent and recognizable visual direction. Its grayscale editorial styling,
large display headings, rounded containers, image-led content, and subtle movement work well
together. The responsive behavior and reduced-motion support are stronger than a typical small
portfolio project.

The next styling improvements should focus on hierarchy and consistency rather than a redesign:
increase heading contrast, restore a visible primary heading, load the font weights actually used,
give the tablet timeline more width, and standardize hover intensity. These changes would improve
readability and maintainability while preserving the original interface.
