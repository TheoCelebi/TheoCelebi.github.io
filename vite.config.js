import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Le site est servi à la racine de https://theocelebi.github.io
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
});
