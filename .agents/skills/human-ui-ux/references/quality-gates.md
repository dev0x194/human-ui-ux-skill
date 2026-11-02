# Human UI/UX quality gates

Use for every UI deliverable. Evaluate on actual task completion, not subjective glow or polish alone.

## UX
- [ ] Primary user, purpose and next action are unambiguous.
- [ ] First experience has a clear reading order and enough context.
- [ ] Actions are functioning; loading/empty/error/success states are realistic.
- [ ] Content and examples feel product-specific, with demo content labeled.
- [ ] No dead-end dialogs, fake social proof or nonfunctional navigation.

## Art direction
- [ ] Typeface scale and layout rhythm feel intentional.
- [ ] One product-specific visual detail stands out, without clutter.
- [ ] Generic AI tropes are avoided unless deliberately warranted by brand.
- [ ] Color roles, spacing, strokes and component states are consistent.
- [ ] Small screens are composed intentionally, not squeezed desktop mockups.

## Accessibility
- [ ] Text contrast and interactive state visibility are adequate.
- [ ] Focus order/roles/labels make sense (web/desktop).
- [ ] Tap targets and accessibility labels work (native).
- [ ] Reduced-motion, font scaling and zoom have been considered.
- [ ] Form errors have actionable copy and do not rely only on color.

## Platform review
- [ ] Mobile: safe areas, keyboard, scroll, notch/gesture areas, device back navigation.
- [ ] Web: responsive 320/390/768/1280 widths, no horizontal overflow, semantics and link handling.
- [ ] Desktop: narrow window, normal window, keyboard shortcuts, focus, menu/window behavior.
- [ ] Expo web: confirm web dependencies, DOM/native platform distinctions and layout.

## Handoff

Always distinguish **implemented**, **tested**, **untested**, and **requires external build environment**. Do not claim test/device/OS results without running them. If tools are unavailable, provide manual validation commands and checklist rather than invent evidence.
