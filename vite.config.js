import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three') || id.includes('@react-three')) {
            return 'three-vendor';
          }
          if (id.includes('gsap') || id.includes('@gsap')) {
            return 'gsap-vendor';
          }
          if (id.includes('lenis')) {
            return 'lenis-vendor';
          }
          if (id.includes('react-router') || id.includes('react-responsive') || id.includes('react-scroll')) {
            return 'ui-vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
