import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change this from '/Chi-Botanical/' to '/'
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          three: [
            'three',
            'three/examples/jsm/loaders/GLTFLoader.js',
            'three/examples/jsm/controls/OrbitControls.js'
          ],
        },
      },
    },
  },
})