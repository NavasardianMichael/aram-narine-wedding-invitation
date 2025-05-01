import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  base: '/aram-narine-wedding-invitation/',
  plugins: [react(), tsconfigPaths(),],

  css: {
    postcss: './postcss.config.js'
  }
});
