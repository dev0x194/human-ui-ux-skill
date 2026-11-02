# Vanilla HTML / CSS / JavaScript

Use for small sites, prototypes, landing pages and no-framework requirements.

- Prefer semantic HTML and a strong content-first structure before CSS decoration.
- Use CSS custom properties; account for text wrapping, small screens, reduced motion and keyboard focus.
- JavaScript should enhance HTML, not break it. Wire visible controls to real behavior; validate inputs and show feedback.
- Avoid fake data claims, inaccessible clickable `div`s and hamburger menus with no accessible expanded state.
- Make primary action visible above the fold when realistic; let the product's hierarchy drive the layout.
- Keep fonts local/system or legally hosted; no runtime dependency required for static demos.

See the fully standalone example at repository root `examples/daymark-comparison.html`: same product, two art directions, with task interactions and comparison controls. Use it as a **contrast example**, not a template to clone on every project.
