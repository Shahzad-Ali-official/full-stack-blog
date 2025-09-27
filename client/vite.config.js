import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Dev server proxy setup
    proxy: {
      // All requests starting with '/api' will be proxied
      '/api': {
        target: 'http://localhost:3000', // The address of your backend server
        changeOrigin: true, // Changes the origin of the host header to the target URL
        // Optional: Rewrite the path to remove the '/api' prefix if your Express routes don't include it
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
})
