// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fuse-proyectos.vercel.app', // luego lo cambias por tu dominio propio
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
