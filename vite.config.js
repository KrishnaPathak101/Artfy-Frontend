// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'https://artify-backend-gk1b.onrender.com',
=======
        target: 'http://localhost:5000',
>>>>>>> 4bf67d3483214eaf6959756e0e56825b424bbd53
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});