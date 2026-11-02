/** Adres w panelu operatora z `VITE_PANEL_URL`. Bez adresu `null`: strona nie pokazuje odnośnika, który nigdzie nie prowadzi. */
export const panelUrl = (path: string): string | null => {
  const base = String(import.meta.env.VITE_PANEL_URL ?? '').trim().replace(/\/+$/, '')
  return base ? `${base}${path}` : null
}
