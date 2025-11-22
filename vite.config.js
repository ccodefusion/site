import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: O nome abaixo deve ser IGUAL ao nome do repositório que você vai criar no GitHub.
  // Se você criar o repo com outro nome, mude aqui também.
  base: "/codefusion-site/", 
})