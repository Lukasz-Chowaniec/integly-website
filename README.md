# Integly website

Public website of Integly: Home, Features, Pricing. Vue 3, Vite and TypeScript, built as a static site. It has no dependency on core or any API.

## Commands

```bash
cp .env.example .env     # set VITE_PANEL_URL
npm install
npm run dev              # http://0.0.0.0:5167 (strict port, registry: _agents/PORTY.md)
npm run build            # dist/, requires VITE_PANEL_URL
npm run test             # Vitest
npm run test:e2e         # Playwright, port 4167 (PLAYWRIGHT_PORT overrides it)
```

## Configuration

| Variable | Purpose |
|---|---|
| `VITE_PANEL_URL` | Address of the operator panel; "Log in" and "Forgot password?" link to it. Required by `npm run build`. Without it in dev, these links are not shown. |

There are no secrets in this application.

## Deployment

`integly.pl` is a static site on the RP server. Deployment belongs to the ansible repository (`/home/lukasz/ansible`): it takes a built artifact, never the dev server (D-11). Each page has its own HTML file (`/`, `/features/`, `/pricing/`), so the server needs no address rewriting.

## Fonts and licences

Sentient and Satoshi are stored in `src/assets/fonts/` (from Fontshare, ITF Free Font License), so the built site makes no requests to other servers.
