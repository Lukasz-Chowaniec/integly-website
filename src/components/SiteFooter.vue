<script setup lang="ts">
import integlyLogo from '../assets/integly-logo-white-font.svg'
import { panelUrl } from '../lib/panel'

const loginUrl = panelUrl('/login')
const forgotPasswordUrl = panelUrl('/nie-pamietam-hasla')
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-row">
      <a href="/" class="site-footer-logo"><img :src="integlyLogo" alt="Integly"></a>
      <div class="site-footer-columns">
        <div class="site-footer-column">
          <h4>Product</h4>
          <a href="/features/">Features</a>
          <a href="/pricing/">Pricing</a>
        </div>
        <div v-if="loginUrl && forgotPasswordUrl" class="site-footer-column">
          <h4>Account</h4>
          <a :href="loginUrl">Log in</a>
          <a :href="forgotPasswordUrl">Forgot password?</a>
        </div>
      </div>
    </div>
    <p class="site-footer-copy">&copy; 2026 Integly. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  z-index: 2;
  padding: 40px var(--site-gutter);
  background: var(--site-ink);
  color: #f7efe6;
}

.site-footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(247, 239, 230, 0.2);
}

.site-footer-logo img {
  height: 28px;
}

.site-footer-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 72px;
}

.site-footer-column {
  display: grid;
  align-content: start;
  gap: 10px;
}

.site-footer-column h4 {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 700;
}

.site-footer-column a {
  font-size: 13px;
  color: rgba(247, 239, 230, 0.72);
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-footer-column a:hover {
  color: #ffffff;
}

.site-footer-copy {
  margin: 24px 0 0;
  font-size: 12px;
  text-align: center;
  color: rgba(247, 239, 230, 0.7);
}
</style>
