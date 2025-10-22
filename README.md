# E-commerce (FreshCart)

A Next.js e-commerce starter built with Tailwind CSS, Lucide icons and Swiper for carousels. This repo contains a small storefront layout (TopHeader, Navbar, MainSlider), shared UI components, and utilities.

## Tech stack
- Next.js (App Router)
- React
- Tailwind CSS
- Swiper
- Lucide icons (used via `lucide-react`)
- next/font (Google fonts)

## Project structure (important folders)
- `src/app` - Next.js app routes and `layout.tsx` / `globals.css`
- `src/components` - UI components and shared parts (icons, layout, ui primitives)
- `src/components/icons` - custom SVG icons wrapper
- `src/components/home` - homepage components (MainSlider)

## Quick setup

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Open http://localhost:3000

## Scripts
- `npm run dev` - start development server
- `npm run build` - build production
- `npm run start` - run production build locally

## Fonts (next/font)

This project uses `next/font/google` for Poppins and Inter in `src/app/layout.tsx`. Make sure you:

- Use the returned object classes/variables on the `<body>` (or root element):

```tsx
import { Poppins, Inter } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
```

- In CSS reference the CSS variable (do NOT @import the font in CSS when using next/font):

```css
body { font-family: var(--font-poppins), var(--font-inter), sans-serif; }
```

Common pitfalls:
- Don't keep `@import url('https://fonts.googleapis.com/...')` in `globals.css` if you use `next/font/google`.
- Ensure you add `.variable` to the `body` (or `.className` if you use the CSS class approach).

## Icons

Custom icons are defined in `src/components/icons/icons.tsx`. To allow changing color via Tailwind (`text-...`) you must:

1. Pass the `className` to the root `<svg>` (not only to a wrapping `<span>`).
2. Use `stroke="currentColor"` or `fill="currentColor"` inside `path` elements instead of hard-coded colors like `stroke="black"`.

Example:

```tsx
export const Cart = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} {...props} viewBox="..." fill="none">
    <path d="..." stroke="currentColor" />
  </svg>
)
```

Then you can do: `<Icons.cart className="text-green-500" />`.

## Swiper bullets (pagination)

When using `renderBullet` to return an HTML string, Tailwind classes in that string will not be recognized by PurgeCSS/Tailwind's JIT. Use a normal CSS file (or `globals.css`) and a custom class.

Example `renderBullet`:

```js
renderBullet: (index, className) => `<span class="${className} custom-bullet">${index+1}</span>`
```

Then add CSS (in `globals.css` or an imported plain `.css` file):

```css
.custom-bullet { display:inline-block; width:14px; height:14px; border-radius:50%; background:#fff8; }
.swiper-pagination-bullet-active.custom-bullet { background:#DB4444; border:2px solid #fff; }
```

Do not try to use CSS Modules or Tailwind classes inside the returned HTML string.

## Troubleshooting

- "Invalid DOM property `stroke-width`" — change `stroke-width` to `strokeWidth` in JSX OR better: use `strokeWidth` prop when using React's SVG props. However if you keep raw SVG inside a string use the SVG attribute names.
- "Super expression must either be null or a function, not undefined" — usually caused by wrong imports or default vs named imports. Check any `extends` or imported component is defined and imported correctly.
- Fonts not applying — ensure `next/font/google` is used and you apply `.variable`/`.className` on the `<body>`, and remove Google `@import` from `globals.css`.

## Useful files to inspect
- `src/app/layout.tsx` — app root and fonts
- `src/app/globals.css` — global styles, Tailwind layers
- `src/components/icons/icons.tsx` — custom SVGs (change stroke to currentColor)
- `src/components/home/MainSlider.tsx` — Swiper usage and pagination renderBullet

## How to contribute / dev notes

- Keep icons generic and configurable (accept `className`, `width`, `height`).
- Prefer `currentColor` usage inside SVGs for easy coloring.
- When generating HTML strings for third-party libraries (Swiper), style with normal CSS files.

If you want I can:
- Fix the icons to use `currentColor` and accept `className` on the SVG root.
- Move the slider bullet CSS to a plain CSS file and wire it up.

---
Generated README — edit to fit your exact project name and deployment instructions.
