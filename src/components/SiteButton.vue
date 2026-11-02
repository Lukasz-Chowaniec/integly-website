<script setup lang="ts">
/** Jedyny przycisk strony: jeden rozmiar, dwa warianty. */
withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'secondary'
  block?: boolean
}>(), { variant: 'primary' })
</script>

<template>
  <a :href="href" class="site-btn" :class="[`site-btn--${variant}`, { 'site-btn--block': block }]"><slot /></a>
</template>

<style scoped>
.site-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 26px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.site-btn:hover {
  transform: translateY(-1px);
}

.site-btn:focus-visible {
  outline: 2px solid var(--site-ink);
  outline-offset: 2px;
}

.site-btn--primary {
  background: var(--site-btn-bg);
  color: var(--site-btn-fg);
  box-shadow: 0 14px 28px var(--site-btn-shadow);
}

.site-btn--secondary {
  border-color: var(--site-btn-line);
  background: var(--site-btn-tint);
  color: var(--site-ink);
}

.site-btn--block {
  width: 100%;
}
</style>
