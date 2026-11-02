import { expect, test } from '@playwright/test'

const PAGES = [
  { path: '/', title: 'Product and sales data' },
  { path: '/features/', title: 'What Integly does' },
  { path: '/pricing/', title: 'Prices are not published yet.' },
]

test('nawigacja między stronami i odnośnik do panelu', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main' })
  await nav.getByRole('link', { name: 'Features' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('What Integly does')
  await nav.getByRole('link', { name: 'Pricing' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Prices are not published yet.')
  await expect(page.locator('header').getByRole('link', { name: 'Log in' })).toHaveAttribute('href', 'https://panel.example.test/login')
})

for (const { path, title } of PAGES) {
  test(`${path}: przyciski jednej wysokości, bez przewijania w poziomie, bez zasobów zewnętrznych`, async ({ page, baseURL }) => {
    const external: string[] = []
    page.on('request', (request) => {
      if (!request.url().startsWith(baseURL!) && !request.url().startsWith('data:')) external.push(new URL(request.url()).hostname)
    })
    await page.goto(path)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(title)
    const heights = await page.locator('.site-btn').evaluateAll((items) => items.map((item) => Math.round(item.getBoundingClientRect().height)))
    expect(new Set(heights).size, heights.join(', ')).toBe(1)
    expect(external).toEqual([])
    expect(await page.evaluate(async () => { await document.fonts.ready; return document.fonts.check('16px Satoshi') && document.fonts.check('500 16px Sentient') })).toBe(true)

    await page.setViewportSize({ width: 390, height: 844 })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    expect(overflow).toBeLessThanOrEqual(0)
  })
}
