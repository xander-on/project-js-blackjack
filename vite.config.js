// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",// Otras configuraciones de Vite...
  build: {
    outDir: 'docs', // Carpeta de destino personalizada
  },
});