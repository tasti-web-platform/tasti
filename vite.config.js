import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tasti-vite/', // ← BU ÇOK ÖNEMLİ
  plugins: [react(),tailwindcss()],
})