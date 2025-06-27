// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Chi-Botanical/',
  build: {
    chunkSizeWarningLimit: 1500, // Increase chunk size warning limit to 1.5MB
    rollupOptions: {
      output: {
        manualChunks: {
          // This splits three.js and its loaders into a separate chunk for better performance
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