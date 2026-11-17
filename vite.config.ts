import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves a project site from /<repo-name>/. The deploy workflow passes that path in BASE_PATH.
  // Locally, and on a custom domain, the site lives at the root.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
