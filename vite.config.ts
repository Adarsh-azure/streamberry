import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'atoms': '/src/atoms',
      'molecules': '/src/molecules',
      'organisms': '/src/organisms',
      'templates': '/src/templates',
      'assets': '/src/assets',
      'utils': '/src/utils',
      'styles': '/src/styles'
    }
  }
})
