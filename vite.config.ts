import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/aram-narine-wedding-invitation/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  }
});
