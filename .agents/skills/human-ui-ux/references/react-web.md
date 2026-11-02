# React web (Vite / Next.js / existing React apps)

## Before changing code

- Inspect router (React Router, TanStack, Next App Router, etc.), styles (CSS modules, Tailwind, CSS-in-JS), component primitives, i18n and fetch/data conventions.
- Respect current architecture. Don't replace a stable app with a new template.
- Use semantic HTML with `<main>`, `<nav>`, headings, `<button>` for actions and `<a>` for navigation.

## Design system

- Set CSS custom properties (or project token system) for brand surfaces, accent, body type, display type, spacing, radius and border.
- Keep layout responsive, progressive and content-led; avoid blindly using equal-height feature cards.
- Keyboard focus, reduced motion and responsive typography are first class; `prefers-reduced-motion`, `:focus-visible`, sufficient contrast.
- Make previews functional; avoid buttons that do nothing. Label demo data and never invent social proof.
- Server-rendered pages must avoid hydration mismatches; keep browser-only APIs inside client effects/handlers.
- Check viewport widths around 320, 390, 768, 1280, plus at least one narrow desktop window if it is an app.

## React patterns

- State belongs in the closest stable owner; input state and view should share a single source of truth.
- Prefer real loading/error/empty/success state when fetching data. Make real links navigable; use router Links when available.
- Use stable list keys and accessible form labels; no click handlers on noninteractive elements.
- Separate reusable product components from screen-specific composition. Do not overabstract tiny UI features.

Example: `examples/react-web/src/App.tsx` and `App.css` are ready to copy into a Vite React TypeScript scaffold (`npm create vite@latest ... -- --template react-ts`). They are illustrative, not a preinstalled dependency tree.
