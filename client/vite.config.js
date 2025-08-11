// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite configuration for the client-side application
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Redirect /api calls to your backend
    },
  },
});