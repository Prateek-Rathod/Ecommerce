// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Ecommerce/", // ✅ Must match your repo name
  server: {port:5173}
});
