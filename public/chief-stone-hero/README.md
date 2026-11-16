# Chief Stone homepage video hero

This package contains the actual uploaded Caleb video, a poster frame, and a Next.js hero component styled after the selected Image 2 mockup.

## Install
1. Copy `public/videos/` into your Next.js project's `public/videos/`.
2. Copy both files in `components/` into your project's `components/`.
3. In your homepage (often `app/page.jsx`, `app/page.tsx`, or `pages/index.jsx`), import `ChiefStoneHero` from your components directory.
4. Replace ONLY the existing homepage hero JSX with `<ChiefStoneHero />`. Leave the rest of your homepage untouched.
5. Run `npm run dev` and check both desktop and mobile.

## Integration notes
- The packaged logo is a typography-based approximation. For exact brand fidelity, replace it with the existing site's logo component or image.
- The button currently links to `/contact`. Connect it to your existing consultation modal if desired using `onConsultationClick`.
- The hamburger has a basic fallback menu; pass `onMenuClick` to invoke your existing site navigation instead.
- The source video is portrait-oriented, so the desktop crop is intentional. Fine-tune `object-position` in CSS after checking the actual footage.
- No existing website files have been modified by this package.
