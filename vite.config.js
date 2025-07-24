import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pokedex-backend-2-03i4.onrender.com', // your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
