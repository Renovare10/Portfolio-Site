// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import canonicalPlugin from './vite-plugin-canonical';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    canonicalPlugin({
      base: 'https://chadmurchison.com',
      stripTrailingSlash: true,
      stripHtmlExtension: true,
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});