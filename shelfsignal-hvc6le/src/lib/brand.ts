// @polsia:user-owned — brand identity. Edit freely. `site.ts` re-exports
// siteName/siteDescription; `manifest.ts` + `opengraph-image.tsx` read `brandVisual`.

export const siteName = 'ShelfSignal';
export const siteDescription = 'Fewer stock surprises for independent shops in Mongolia.';

// PWA + social-share colors. HEX only (CSS variables aren't readable here) — set
// them to match the theme you define in src/app/brand-theme.css. The starter
// values are achromatic placeholders, not a palette.
export const brandVisual = {
  /** PWA browser-UI / status-bar color — usually your background or primary. */
  themeColor: '#f3f0e7',
  /** PWA splash + install background. */
  backgroundColor: '#f3f0e7',
  /** Social-share (OG/Twitter) image. */
  og: {
    background: '#262922',
    foreground: '#f3f0e7',
    /** Second line under the site name; '' hides it. */
    tagline: 'Fewer stock surprises for independent shops in Mongolia.',
    /** Optional https PNG/JPEG background photo; '' keeps the plain-color card. */
    image: '',
  },
} as const;
