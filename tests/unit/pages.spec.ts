import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import FeaturesPage from '../../src/pages/FeaturesPage.vue'
import HomePage from '../../src/pages/HomePage.vue'
import PricingPage from '../../src/pages/PricingPage.vue'
import { panelUrl } from '../../src/lib/panel'

/** Teksty strony: po angielsku, bez nazw providerów i bez fikcyjnych referencji, cen i obietnic. */
const FORBIDDEN = /\b(Shoper|PrestaShop|Magento|Allegro|Amazon|PC-?Market|Comarch|Wapro|Subiekt|Eurocash|Europlatform|Lumensign|Trusted by|Free Trial|Contact Sales|Most Popular|Save \d+%)\b|\$\d|[ąćęłńśźżĄĆĘŁŃŚŹŻ]/i

const sourceFiles = (dir: string): string[] => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name)
  return statSync(path).isDirectory() ? sourceFiles(path) : /\.vue$/.test(name) ? [path] : []
})
const templateOf = (source: string) => source.slice(source.indexOf('<template>'), source.lastIndexOf('</template>'))
const scriptDataOf = (source: string) => source.slice(0, source.indexOf('<template>')).replace(/\/\*\*[\s\S]*?\*\//g, '')

beforeEach(() => {
  vi.stubEnv('VITE_PANEL_URL', 'https://panel.example.test/')
  vi.stubGlobal('matchMedia', () => ({ matches: true }))
})
afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('Odnośniki do panelu', () => {
  it('adres z VITE_PANEL_URL, bez adresu brak odnośnika', () => {
    expect(panelUrl('/login')).toBe('https://panel.example.test/login')
    vi.stubEnv('VITE_PANEL_URL', '')
    expect(panelUrl('/login')).toBeNull()
    const wrapper = mount(HomePage)
    expect(wrapper.text()).not.toContain('Log in')
    expect(wrapper.text()).not.toContain('Forgot password?')
  })

  it.each([HomePage, FeaturesPage, PricingPage])('każda strona prowadzi do panelu adresem ze środowiska', (page) => {
    const hrefs = mount(page).findAll('a').map((link) => link.attributes('href'))
    expect(hrefs).toContain('https://panel.example.test/login')
    expect(hrefs).toContain('https://panel.example.test/nie-pamietam-hasla')
    expect(hrefs.filter((href) => href === '#' || href === '/login')).toEqual([])
  })
})

describe('Treść stron', () => {
  it.each(sourceFiles(join(__dirname, '../../src')))('%s: bez zakazanych zwrotów', (path) => {
    const source = readFileSync(path, 'utf8')
    expect(templateOf(source)).not.toMatch(FORBIDDEN)
    expect(scriptDataOf(source)).not.toMatch(FORBIDDEN)
  })

  it('Zamówienia są opisane jako będące w przygotowaniu', () => {
    expect(mount(FeaturesPage).text()).toContain('Orders from sales channels are in preparation.')
    expect(mount(PricingPage).text()).toContain('In preparation')
  })

  it('Features: elementy wizualne oznaczone jako dane przykładowe', () => {
    const wrapper = mount(FeaturesPage)
    expect(wrapper.findAll('figure')).toHaveLength(6)
    expect(wrapper.findAll('.vf-sample').map((tag) => tag.text())).toEqual(Array(6).fill('Sample data'))
  })

  it('Pricing: bez cen', () => {
    const wrapper = mount(PricingPage)
    expect(wrapper.get('h1').text()).toBe('Prices are not published yet.')
    expect(wrapper.text()).not.toMatch(/\/month|Yearly/)
  })

  it('Home: zakładka zmienia panel treści', async () => {
    const wrapper = mount(HomePage)
    await wrapper.findAll('.home-tab')[1]!.trigger('click')
    expect(wrapper.text()).toContain('Orders in preparation')
  })
})
