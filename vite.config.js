import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tasti-vite/', // ← BU ÇOK ÖNEMLİ
  plugins: [react()],
})