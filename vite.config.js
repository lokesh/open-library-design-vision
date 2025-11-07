import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/open-library-prototype/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        signup: resolve(__dirname, 'signup.html'),
        trending: resolve(__dirname, 'trending.html'),
        headingDemo: resolve(__dirname, 'heading-demo.html'),
        inputDemo: resolve(__dirname, 'input-demo.html'),
      },
    },
  },
}));

