import { defineConfig } from 'astro/config';

// Netlify serves from the domain root, so the defaults work as-is.
// On GitHub Pages the workflow passes --site and --base (e.g. /portfolio-francesco).
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
});
