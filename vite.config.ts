import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {blogPages} from './vite-plugins/blog-pages.ts';

export default defineConfig({
  plugins: [react(), tailwindcss(), blogPages()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
});
