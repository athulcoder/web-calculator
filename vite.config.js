import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ae70-2409-40f3-2c-6ae7-5c8c-c8c0-80fa-2032.ngrok-free.app'
    ]
  }
  
})
