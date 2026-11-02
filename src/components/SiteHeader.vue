<script setup lang="ts">
import integlyLogo from '../assets/integly-logo-black-font.svg'
import { panelUrl } from '../lib/panel'
import SiteButton from './SiteButton.vue'

const links = [
  { href: '/', label: 'Home' },
  { href: '/features/', label: 'Features' },
  { href: '/pricing/', label: 'Pricing' },
]
const currentPath = window.location.pathname
const loginUrl = panelUrl('/login')
</script>

<template>
  <header class="site-header">
    <nav class="site-header-nav" aria-label="Main">
      <a v-for="link in links" :key="link.href" :href="link.href" :aria-current="currentPath === link.href ? 'page' : undefined">{{ link.label }}</a>
    </nav>
    <a href="/" class="site-header-logo" data-testid="site-logo"><img :src="integlyLogo" alt="Integly"></a>
    <div class="site-header-action">
      <SiteButton v-if="loginUrl" :href="loginUrl">Log in</SiteButton>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 18px;
  padding: 26px var(--site-gutter) 18px;
}

.site-header-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.site-header-nav a {
  color: var(--site-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-header-nav a:hover,
.site-header-nav a[aria-current='page'] {
  color: var(--site-ink);
}

.site-header-logo img {
  height: 33px;
}

.site-header-action {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 900px) {
  .site-header {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .site-header-logo {
    order: -1;
  }

  .site-header-nav {
    justify-content: center;
  }
}
</style>
