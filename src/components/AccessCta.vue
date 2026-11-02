<script setup lang="ts">
import { panelUrl } from '../lib/panel'
import SiteButton from './SiteButton.vue'

const loginUrl = panelUrl('/login')
</script>

<template>
  <div v-if="loginUrl" class="site-access-cta">
    <h2 class="site-h2">Already have access?</h2>
    <p>Log in to your account, or use the link from your invitation to set a password.</p>
    <SiteButton :href="loginUrl">Log in</SiteButton>
  </div>
</template>

<style scoped>
.site-access-cta {
  display: grid;
  justify-items: center;
  gap: 12px;
  text-align: center;
}

.site-access-cta p {
  margin: 0 0 8px;
  color: var(--site-muted);
}
</style>
