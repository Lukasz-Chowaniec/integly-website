<script setup lang="ts">
import VisualFrame from './VisualFrame.vue'

const families = [
  { family: 'Price', mode: 'Follows source', state: 'Sent', tone: 'ok' },
  { family: 'Stock', mode: 'Follows source', state: 'Sent', tone: 'ok' },
  { family: 'Content', mode: 'Set by hand', state: 'Sent', tone: 'ok' },
  { family: 'Media', mode: 'Follows catalog', state: 'Waiting', tone: 'attention' },
]
</script>

<template>
  <VisualFrame title="From source to channel">
    <div class="vh-flow">
      <div class="vh-node">Sources</div>
      <span class="vh-line" aria-hidden="true" />
      <div class="vh-node">Catalog</div>
      <span class="vh-line" aria-hidden="true" />
      <div class="vh-targets">
        <div class="vh-node vh-node--target">Online store</div>
        <div class="vh-node vh-node--target">Marketplace</div>
      </div>
    </div>
    <p class="vf-label">Sample product in a channel</p>
    <table class="vf-table">
      <tbody>
        <tr v-for="row in families" :key="row.family">
          <td>{{ row.family }}</td>
          <td class="vf-muted vh-mode">{{ row.mode }}</td>
          <td><span class="vf-chip" :class="`vf-chip--${row.tone}`">{{ row.state }}</span></td>
        </tr>
      </tbody>
    </table>
  </VisualFrame>
</template>

<style scoped>
.vh-flow {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
}

.vh-node {
  flex: none;
  padding: 10px 14px;
  border: 1px solid var(--site-line);
  border-radius: 12px;
  background: rgba(61, 45, 36, 0.05);
  font-weight: 500;
  text-align: center;
}

.vh-node--target {
  background: var(--site-btn-bg);
  border-color: transparent;
  color: var(--site-btn-fg);
}

.vh-line {
  position: relative;
  flex: 1;
  min-width: 18px;
  height: 1px;
  margin-right: 6px;
  background: var(--site-btn-line);
}

.vh-line::after {
  content: '';
  position: absolute;
  top: -3px;
  right: -6px;
  border-left: 6px solid var(--site-btn-line);
  border-top: 3.5px solid transparent;
  border-bottom: 3.5px solid transparent;
}

.vh-targets {
  flex: none;
  display: grid;
  gap: 8px;
}

.vf-table td.vh-mode {
  text-align: left;
  padding-left: 12px;
}
</style>
