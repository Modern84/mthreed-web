// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind v4 läuft über PostCSS (postcss.config.mjs) —
// @tailwindcss/vite ist mit Astro 6 / rolldown-vite inkompatibel (Stand 2026-06).
export default defineConfig({
  site: 'https://mthreed.io',
  output: 'static',
  compressHTML: true,
});
