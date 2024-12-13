import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Setzt '@' auf den src-Ordner
    },
  },
  publicDir: 'public', // Sicherstellen, dass das korrekte public-Verzeichnis genutzt wird
  build: {
    outDir: 'build', // Setzt das Ausgabe-Verzeichnis für den Build
    rollupOptions: {
      external: [
        'mapbox-gl/dist/mapbox-gl.css', // Externalisiere die Mapbox CSS
      ],
    },
  },
  server: {
    port: 3000, // Optional: Setzt einen spezifischen Entwicklungsport
    open: true, // Öffnet den Browser automatisch bei `npm run dev`
  },
});
