import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    host: true, // Allows access from your phone using the local IP address
    port: 3000, // You can change this if needed
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'CGemini',
        short_name: 'CGemini',
        description: 'Custom Gemini app powered by Gemini API',
        theme_color: '#000000',
        icons: [
          {
            src: 'src/assets/Designer-9.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'src/assets/Designer-9.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'src/assets/Designer-9.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});