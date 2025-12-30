## Portfolio (Next.js + Tailwind CSS + GSAP)

Modern developer portfolio built with Next.js App Router, Tailwind CSS v4, TypeScript, and GSAP ScrollTrigger animations.

![next-js-portfolio-website](public/images/github-cover.png)


### Features
- **Next.js 16** (App Router) with **TypeScript**
- **React 19**
- **Tailwind CSS v4** with `@theme` tokens
- **GSAP + ScrollTrigger** via a reusable `ScrollReveal` component
- **React Icons**, **react-simple-typewriter**

### Quick Start
1) Install dependencies
```bash
npm install
```

2) Start the dev server
```bash
npm run dev
```

3) Open the app
```
http://localhost:3000
```

### Scripts
- **dev**: run the development server
- **build**: create a production build
- **start**: run the production server locally
- **lint**: run ESLint

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Project Structure
```
src/
  app/
    layout.tsx      # Root layout, fonts, global wrappers
    page.tsx        # Home page assembling sections
    globals.css     # Tailwind + theme tokens
  components/
    Header.tsx
    HeroSection.tsx
    WorkExperience.tsx
    TechStack.tsx
    ProjectsSection.tsx
    ContactSection.tsx
    Footer.tsx
    ScrollReveal.tsx  # GSAP + ScrollTrigger wrapper
public/
  images/ ...
  fonts/  ...
```

### Styling
- Tailwind v4 is enabled via `@import "tailwindcss"` in `src/app/globals.css` and uses `@theme` variables.
- The primary font is loaded in `src/app/layout.tsx` via Google Fonts.

### Animations (GSAP + ScrollTrigger)
This project ships with a client-only `ScrollReveal` wrapper that reveals content as it enters the viewport.

Component: `src/components/ScrollReveal.tsx`
- **Props**
  - **className**: string (optional wrapper classes)
  - **offsetY**: number = 24 (initial translateY in px)
  - **opacityFrom**: number = 0 (initial opacity)
  - **duration**: number = 0.8 (seconds)
  - **delay**: number = 0 (seconds)
  - **ease**: string = `power3.out`
  - **stagger**: number | undefined (if provided, immediate children animate one-by-one)
  - **as**: intrinsic element tag = `div` (optional wrapper tag)

Usage example:
```tsx
// Any client component
"use client";
import ScrollReveal from "@/components/ScrollReveal";

export default function Example() {
  return (
    <section className="py-24">
      <ScrollReveal className="max-w-5xl mx-auto" offsetY={32} duration={1}>
        <h2 className="text-3xl">Revealed on scroll</h2>
        <p className="text-white/70 mt-4">This block fades and slides up.</p>
      </ScrollReveal>

      {/* Stagger children */}
      <ScrollReveal className="grid grid-cols-2 gap-6 mt-16" stagger={0.12}>
        <div className="p-6 border rounded-xl">Card A</div>
        <div className="p-6 border rounded-xl">Card B</div>
        <div className="p-6 border rounded-xl">Card C</div>
      </ScrollReveal>
    </section>
  );
}
```

Notes:
- Only use `ScrollReveal` in client components (those starting with `"use client"`).
- `stagger` animates each immediate child of the wrapper sequentially.
- The trigger is the wrapper itself with `start: "top 85%"`, and `once: true` by default.

### Adding a New Section
1) Create a component under `src/components/YourSection.tsx`.
2) Wrap top-level content in `ScrollReveal` (add `stagger` if you want sequential children).
3) Import it into `src/app/page.tsx` and place it where you want.

### Deployment (Vercel)
1) Push your repository to GitHub/GitLab.
2) Import the repo into Vercel.
3) Framework preset: **Next.js**. Default build command is `next build` and output is handled automatically.

### Requirements
- Node.js **>= 18.18** (recommended: latest LTS)
- npm **>= 9**

### Troubleshooting
- **Animations not running**: Ensure the component using `ScrollReveal` has `"use client"` at the top.
- **TypeScript JSX errors**: Use `as?: keyof React.JSX.IntrinsicElements` when defining wrapper tags.
- **Images not loading**: Verify paths under `public/images/...` and the `next.config.ts` if you add remote images.

### License
This template is provided as-is for personal and commercial portfolio use. Add a license of your choice if you plan to redistribute.


