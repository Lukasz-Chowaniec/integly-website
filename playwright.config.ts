import { defineConfig, devices } from '@playwright/test'

// Port z bloku Integly (`_agents/PORTY.md`). Adres panelu jest testowy: odnośniki nie mogą prowadzić do żywego panelu.
const port = Number(process.env.PLAYWRIGHT_PORT ?? 4167)
const baseURL = `http://127.0.0.1:${port}`

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  fullyParallel: true,
  reporter: [['list']],
  use: { baseURL, trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${port} --strictPort`,
    url: baseURL,
    env: { VITE_PANEL_URL: 'https://panel.example.test' },
    reuseExistingServer: false,
    timeout: 120_000,
  },
})
