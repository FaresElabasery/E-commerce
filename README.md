# Exclusive — E-commerce Demo

Live demo: https://e-commerce-ten-puce.vercel.app/ (production)

FreshCart is a Next.js storefront prototype built as a portfolio project. It demonstrates a modern React + Next.js stack with Tailwind CSS, accessible components, custom icons, and media-rich UI (carousel, product cards, sheets/drawers).

The goal is to show a production-style project structure, reusable UI primitives, and common e-commerce patterns so reviewers and potential employers can quickly evaluate architecture and implementation quality.

---

## Highlights & features

- App architecture: Next.js App Router with a root `layout.tsx` and scoped styles
- Responsive header with search, theme toggle, and auth links
- Reusable UI primitives (Button, Input, Navigation menu, Sheet/Dialog) in `src/components/ui`
- Custom icons in `src/components/icons` — designed to accept `className` and use `currentColor`
- Hero carousel (`MainSlider`) built with Swiper, with autoplay and custom pagination bullets
- Theme support (light/dark) implemented with a theme provider and CSS variables
- Example pages for products, categories, brands and basic routing scaffolding
- Mobile-first responsive design and utility-driven styling via Tailwind CSS

## Tech stack

- Next.js (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Swiper (carousel)
- lucide-react (icon primitives) + custom SVGs
- next/font (Google fonts)

## Project structure (overview)

- `src/app/` — App routes, root `layout.tsx`, `globals.css`
- `src/components/` — UI components, shared widgets and icons
  - `icons/` — Icon wrapper (`icons.tsx`) and custom SVGs
  - `home/` — `MainSlider.tsx` (hero carousel)
  - `layout/` — `Navbar`, `TopHeader`, footer components
  - `shared/` — `SearchInput`, `ThemeToggle`, etc.
- `src/lib/` — small utilities (e.g. `utils.ts`)

## Quick start (development)

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

3. Open the app

Visit http://localhost:3000

## Build & deploy

Build for production:

```powershell
npm run build
npm run start
```

Deployment notes:

- The demo is deployed to Vercel: `https://e-commerce-ten-puce.vercel.app/`.
- To deploy your own copy: push to a Git remote (GitHub/GitLab) and import to Vercel. Set the build command to `npm run build` and the output directory to the default.

No environment variables are required for the public demo. If you add any API keys later (payments, maps, analytics), provide them via Vercel Environment Variables.

## Fonts (using `next/font`)

This project uses `next/font/google` (Poppins and Inter). Important notes:

- Do NOT keep `@import` font rules in `globals.css` when using `next/font`.
- In `src/app/layout.tsx` import and add the returned `.variable` or `.className` to the `<body>`.

Example in `layout.tsx`:

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

Then in CSS reference the variable:

```css
body { font-family: var(--font-poppins), var(--font-inter), sans-serif; }
```

## Icons best practices

To make SVG icons styleable and accessible:

- Apply `className` to the root `<svg>` so Tailwind utilities can affect it.
- Use `stroke="currentColor"` and/or `fill="currentColor"` inside the paths so color is inherited from CSS.
- Accept `React.SVGProps<SVGSVGElement>` on icon components so callers can pass `width`, `height`, `aria-*` attributes.

Example:

```tsx
export const Heart = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" {...props}>
    <path d="..." stroke="currentColor" strokeWidth={1.5} />
  </svg>
)
```

Usage: `<Icons.heart className="text-red-500" />`

## Swiper pagination (custom bullets)

When returning HTML strings from `renderBullet`, Tailwind will not include utility classes inside those strings. The recommended approach:

1. Return a standard class name from `renderBullet` alongside Swiper's `className`.

```js
renderBullet: (index, className) => `<span class="${className} custom-bullet">${index+1}</span>`
```

2. Add styling in a plain CSS file (`globals.css` or imported `.css`):

```css
.custom-bullet { display:inline-block; width:14px; height:14px; border-radius:50%; background:#ffffff80; }
.swiper-pagination-bullet-active.custom-bullet { background:#DB4444; border:2px solid #fff; }
```

Do NOT rely on Tailwind utility classes inside the returned HTML string; they won't be recognized by the compiler.

## Accessibility

- Focus states are preserved using Tailwind's ring/border utilities and a theme provider that avoids removing focus outlines.
- Navigation and sheet/drawer components include keyboard interactions. Continue to test with screen readers if you add complex components.

## Known issues & fixes

- Invalid DOM property `stroke-width` warning: in JSX use `strokeWidth` (camelCase). If you embed raw SVG markup as a string, keep the attribute `stroke-width` in the string.
- Icon color not changing: ensure the icon uses `currentColor` and `className` is put on the `<svg>` root.
- Swiper bullet styling not applied: verify that the custom bullet class is defined in a plain CSS file (not a CSS module) and that `renderBullet` returns that class.

## Development notes & how to help

- Keep icon components small and accept `React.SVGProps<SVGSVGElement>` so consumers can pass `className`, `width`, `height`, `aria-*` attributes.
- Prefer composition: reuse `Button`, `Input`, and `Sheet` primitives across pages to avoid duplication.

## Contact / credits

Project by Fares Elabasery — used as a personal portfolio and learning project.

Live demo: https://e-commerce-ten-puce.vercel.app/

If you want I can also:

- Update icons to use `currentColor` across all files.
- Move Swiper custom bullet CSS to a separate `MainSlider.css` and import it in `MainSlider.tsx`.
- Run a pass to fix any remaining console warnings and accessibility issues.

---

Thank you for reviewing FreshCart — tell me what you'd like improved next.
 
## Pages (route descriptions)

Below is a quick reference for each page/route in the app, what it does and the main components or services it uses.

- `/` — Home
  - File: `src/app/page.tsx`
  - Purpose: Landing page combining the categories menu and the hero carousel. Shows Today’s sliders (products and categories) using lazy-loaded sliders with Suspense.
  - Key components: `CategoriesMenu`, `MainSlider`, lazy `ProductSlider`, lazy `CategorySlider`, `SliderSkeleton` fallback.
  - Notes: Uses `force-dynamic` and Suspense to defer heavy client components until needed.

- `/products` — Products listing / search & filters
  - File: `src/app/(public)/products/page.tsx`
  - Purpose: Displays products returned by server APIs and supports searching and filtering by query params (category, search, etc.).
  - Key components/services: `ProductList`, `getAllProducts`, `GetSpecificCategory`.

- `/productDetails/[id]` — Product details
  - File: `src/app/(public)/productDetails/[id]/page.tsx`
  - Purpose: Shows product gallery, title, ratings, price, description, and action buttons (add to cart / wishlist). Handles product-specific UI like sizes.
  - Key components/services: `ProductDetailsSlider`, `AddToCartBtn`, `AddToWishlistBtn`, `Stars`, `GetSpecificProduct`.

- `/cart` — Shopping cart
  - File: `src/app/(public)/cart/page.tsx`
  - Purpose: Displays user's cart items with totals, checkout action and ability to clear the cart.
  - Key components/services: `CartCardProduct`, `getUserCart`, `ClearCartBtn`.

- `/cart/payment` — Checkout / payment
  - File: `src/app/(public)/cart/payment/page.tsx`
  - Purpose: Billing details and payment step; displays saved addresses and payment form.
  - Key components/services: `PaymentForm`, `AddressList`, `getAllAddress`.

- `/wishlist` — Wishlist
  - File: `src/app/(public)/wishlist/page.tsx`
  - Purpose: Grid of user wishlist items (product cards) with wishlist-specific actions.
  - Key components/services: `ProductCard`, `getAllWishlistItems`.

- `/profile` — Edit profile
  - File: `src/app/(public)/profile/page.tsx`
  - Purpose: Profile editing form (user details).
  - Key components: `ProfileForm`.

- `/profile/address` — Address list
  - File: `src/app/(public)/profile/address/page.tsx`
  - Purpose: Lists user's saved addresses and shows empty-state when none exist.
  - Key components/services: `getAllAddress`, `AddressList`.

- `/profile/address-book` — Add address
  - File: `src/app/(public)/profile/address-book/page.tsx`
  - Purpose: Form to add a new shipping/billing address.
  - Key components: `AddAddressForm`.

- `/profile/change-password` — Change password
  - File: `src/app/(public)/profile/change-password/page.tsx`
  - Purpose: Form to change the user's password.
  - Key components: `ProfilePasswordForm`.

- `/allorders` — Orders history
  - File: `src/app/(public)/allorders/page.tsx`
  - Purpose: Lists all user orders, sorted by date, with order detail cards.
  - Key components/services: `getServerSession`, `getAllUserOrders`, `OrderCard`, `AllOrdersClientWrapper`.
  - Notes: Requires authenticated session to fetch user orders.

- `/register` — Register
  - File: `src/app/(Auth)/register/page.tsx`
  - Purpose: User sign-up page with registration form and illustrative image.
  - Key components: `RegisterForm`.

- `/login` — Login
  - File: `src/app/(Auth)/login/page.tsx`
  - Purpose: User login page and form.
  - Key components: `LoginForm`.

- `/forgetPassword` — Request password reset
  - File: `src/app/(Auth)/forgetPassword/page.tsx`
  - Purpose: Enter email to receive a reset code or link.
  - Key components: `ForgetForm`.

- `/otpValidation` — OTP validation
  - File: `src/app/(Auth)/otpValidation/page.tsx`
  - Purpose: Submit OTP for account verification or password reset flows.
  - Key components: `OtpValidationForm`.

- `/resetPassword` — Reset password
  - File: `src/app/(Auth)/resetPassword/page.tsx`
  - Purpose: Enter new password to complete a password reset flow.
  - Key components: `ResetForm`.

---

If you want these descriptions inserted as comments at the top of each `page.tsx` file, or exported to a `PAGES.md` file, tell me which format you prefer and I will apply it.
