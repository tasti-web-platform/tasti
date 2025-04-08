import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/tasti-vite/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, //Consoldaki 404 (Not Found) hatasını kaldırmak için
  },
})