import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// Port z rejestru `_agents/PORTY.md` (blok Integly). Każda strona ma własny plik HTML, więc `dist/` nie wymaga przepisywania adresów na serwerze.
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  if (command === 'build' && !env.VITE_PANEL_URL) {
    throw new Error('VITE_PANEL_URL is required to build the website (see .env.example).')
  }

  return {
    plugins: [vue()],
    appType: 'mpa',
    server: { host: '0.0.0.0', port: 5167, strictPort: true },
    preview: { host: '127.0.0.1', port: 5167, strictPort: true },
    build: {
      rollupOptions: {
        input: {
          home: resolve(__dirname, 'index.html'),
          features: resolve(__dirname, 'features/index.html'),
          pricing: resolve(__dirname, 'pricing/index.html'),
        },
      },
    },
  }
})
