import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Правильный и единственный export
export default defineConfig({
  plugins: [react()],
  base: './', // важно для itch.io и локального запуска
});
