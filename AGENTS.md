# AGENTS.md

Publiczna strona Integly: Home, Features, Pricing. Osobna aplikacja statyczna, teksty po angielsku. Styl jest celowo inny niż panel; standard PK0 jej nie dotyczy.
Wejście całego systemu: [`../platform-docs/AGENTS.md`](../platform-docs/AGENTS.md).

## Układ

| Miejsce | Zawartość |
|---|---|
| `index.html`, `features/index.html`, `pricing/index.html` | osobny plik HTML każdej strony, tytuł i opis strony |
| `src/entries/` | punkt wejścia każdej strony |
| `src/pages/` | treść stron |
| `src/components/` | `PageShell` (tło, nagłówek, stopka), `SiteHeader`, `SiteFooter`, `SiteButton`, `AccessCta` |
| `src/components/features/` | elementy wizualne Features, `VisualFrame` jest ich ramką |
| `src/styles/site.css` | kroje, tokeny `--site-*`, klasy wspólne |
| `src/lib/panel.ts` | adres panelu z `VITE_PANEL_URL` |

## Zasady

- **Bez zależności od panelu i core:** żadnych wywołań API, kodu ani stylów z innych aplikacji. Do panelu prowadzą wyłącznie odnośniki z `panelUrl()`; adresu nie wpisuje się na stałe.
- **Jeden przycisk:** tylko `SiteButton`, jeden rozmiar, warianty `primary` i `secondary`.
- **Teksty:** rzeczowo, bez przymiotników i obietnic. Bez nazw providerów i systemów zewnętrznych, bez fikcyjnych referencji, opinii i cen. Opisują to, co działa ([`../platform-docs/AGENTS.md`](../platform-docs/AGENTS.md) §0–§1); zamówienia są „in preparation”, dopóki core ich nie obsługuje. Pilnuje tego `tests/unit/pages.spec.ts`.
- **Elementy wizualne Features:** wyłącznie dane syntetyczne z oznaczeniem „Sample data”, bez zrzutów prawdziwych danych. W tekście liczba tylko wtedy, gdy jest prawdziwa i zweryfikowana.
- **Zasoby:** zbudowana strona nie pobiera niczego z obcych serwerów (zapadka w `tests/e2e/site.spec.ts`); kroje są w `src/assets/fonts/`.
- Nowa strona: plik HTML, wpis w `src/entries/`, wejście w `build.rollupOptions.input` w `vite.config.ts`, odnośnik w `SiteHeader` i `SiteFooter`. Odnośniki wewnętrzne kończą się ukośnikiem (`/features/`).

## Porty i uruchomienie

Dev `5167`, Playwright `4167` (rejestr `/home/lukasz/PhpstormProjects/_agents/PORTY.md`). Usługa `integly-website` (`platform-docs/environments/dev/systemd-files/`). Wdrożenie: README.
