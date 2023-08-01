import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ https://github.com/medham86/React-tailwind-pro.git",
  plugins: [react()],
})
