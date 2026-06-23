## Setup

No provider/root wrapper is required — these components read no React context. Just import and render. The brand font (Poppins) loads via a remote `@import` in `styles.css` (not bundled) — it's already wired into every design.

## Styling idiom

This is a **Tailwind v3** design system with a small set of hand-written utility classes layered on top, defined in `styles.css`. Use Tailwind utilities for layout/spacing/type as usual, and reach for these named classes/tokens for brand-specific surfaces — never invent new ones:

| Name | Use |
|---|---|
| `.grainient-btn` (+ `.lg` / `.sm`) | the brand gradient CTA button — wrap label text in a `<span class="shimmer-overlay" />` sibling for the shine effect (see `GrainientBtn` source) |
| `.notura-pill` | small rounded label/badge (e.g. "✨ A Solução") |
| `.notura-card` | bordered card with `--notura-shadow-elevated` |
| `.section-divider` | thin horizontal gradient rule between page sections |
| `.page-shell` | the page's max-width content container — wrap section content in it |
| CSS vars: `--notura-primary` (#5341CD), `--notura-primary-light` (#7B6FE8), `--notura-secondary`, `--notura-processing` (#E43790), `--notura-success`, `--notura-violet-50` / `--notura-violet-200`, `--notura-shadow-glow`, `--notura-bg-gradient-grainient` / `-violet` / `-mesh` | brand color/shadow/gradient tokens — reference via `var(--token-name)` in inline styles, the pattern every component here uses for anything outside Tailwind's default palette |

Most components style with plain Tailwind utility classes directly in `className`, and reserve inline `style={{...}}` for gradients, dynamic values (e.g. progress/position), and the CSS vars above.

## Where the truth lives

Read `styles.css` (and its `@import`s, incl. `_ds_bundle.css`) before styling anything new — it's the full compiled Tailwind output plus the custom classes/tokens table above. Each component's own `.prompt.md` documents its specific props with realistic example usage.

## Notes for the agent

- `Navbar` and `Footer` use plain `<img>`/`<a>` in this bundle (not `next/image`/`next/link` — those are Next.js-only and don't apply outside a Next.js app); replicate with whatever your target environment's equivalents are.
- Build with the real exported components, e.g.:

```jsx
<section className="page-shell py-24">
  <div className="notura-pill mb-4">✨ Novidade</div>
  <h2 className="text-3xl font-bold" style={{ color: '#0A0A0A' }}>
    Toda reunião vira <ShinyText text="resultado" color="#0A0A0A" shineColor="#9B8AFB" />
  </h2>
  <GrainientBtn href="#" size="lg">Quero o combo →</GrainientBtn>
</section>
```
