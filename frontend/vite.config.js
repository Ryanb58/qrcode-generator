import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/qrcode-generator/',
  plugins: [
    vue(),
  ],
  build: {
    outDir: path.resolve(__dirname, '../docs'),
    emptyOutDir: true, // This will empty the output directory before each build
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['tailwindcss'],
  },
})
