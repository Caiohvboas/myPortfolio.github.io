import { defineConfig } from 'vite';

export default defineConfig({
  base: '/my-portfolio/', // Caminho base relativo ao seu repositório no Github Pages
  server: {
    mimeTypes: {
      'js': 'application/javascript',
      'mjs': 'application/javascript'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
