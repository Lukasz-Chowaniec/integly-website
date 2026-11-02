<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SiteFooter from './SiteFooter.vue'
import SiteHeader from './SiteHeader.vue'
import '../styles/site.css'

/** Rama każdej strony: tło z ruchomą poświatą, nagłówek, treść, stopka. */
const root = ref<HTMLElement | null>(null)
let frame = 0

onMounted(() => {
  const element = root.value
  if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let t = 0
  const animate = () => {
    t += 0.003
    element.style.setProperty('--glow-x', `${50 + Math.sin(t * 0.9) * 20}%`)
    element.style.setProperty('--glow-y', `${40 + Math.cos(t * 1.1) * 16}%`)
    element.style.setProperty('--glow-x2', `${50 + Math.cos(t * 0.6) * 14}%`)
    element.style.setProperty('--glow-y2', `${62 + Math.sin(t * 0.7) * 12}%`)
    frame = requestAnimationFrame(animate)
  }
  frame = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <div ref="root" class="site site-shell">
    <div class="site-shell-glow" aria-hidden="true" />
    <SiteHeader />
    <main class="site-shell-main">
      <slot />
    </main>
    <slot name="closing" />
    <SiteFooter />
  </div>
</template>

<style scoped>
.site-shell {
  --glow-x: 55%;
  --glow-y: 40%;
  --glow-x2: 45%;
  --glow-y2: 70%;
  overflow: hidden;
}

.site-shell-glow {
  position: absolute;
  inset: -20% -10% -30%;
  background:
    radial-gradient(700px 500px at var(--glow-x) var(--glow-y), rgba(255, 230, 190, 0.65), transparent 70%),
    radial-gradient(600px 420px at var(--glow-x2) var(--glow-y2), rgba(255, 210, 160, 0.55), transparent 75%);
  opacity: 0.85;
  pointer-events: none;
  animation: site-glow-pulse 18s ease-in-out infinite;
}

.site-shell-main {
  position: relative;
  z-index: 2;
  padding: 20px var(--site-gutter) 1px;
}

@keyframes site-glow-pulse {
  50% {
    transform: translate3d(-2%, 1%, 0) scale(1.03);
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-shell-glow {
    animation: none;
  }
}
</style>
