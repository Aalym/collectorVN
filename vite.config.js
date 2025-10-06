import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/collectorVN/', // 👈 ОБЯЗАТЕЛЬНО
})
=======
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 критично для itch.io и локального открытия index.html
});
>>>>>>> fe340fce3a949e0eca831505e0673886514f24ac