import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),      // official React plugin, no babel plugins needed
    tailwindcss() // Tailwind integration
  ],
  build: {
    target: 'esnext', // important for React 18
  },
});
