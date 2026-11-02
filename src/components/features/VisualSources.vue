<script setup lang="ts">
import VisualFrame from './VisualFrame.vue'

const rows = [
  { source: 'Source A', regular: '18.90', promo: '16.90', lowest: '16.50', stock: 42 },
  { source: 'Source B', regular: '19.50', promo: '–', lowest: '18.90', stock: 7 },
  { source: 'Source C', regular: '18.90', promo: '15.90', lowest: '15.90', stock: 0 },
]
const stock = [
  { label: 'Quantity', value: '50' },
  { label: 'Blocked', value: '3' },
  { label: 'Reserved', value: '5' },
  { label: 'Available', value: '42', strong: true },
]
</script>

<template>
  <VisualFrame title="Prices and stock per source">
    <table class="vf-table">
      <thead>
        <tr><th>Source</th><th>Regular</th><th>Promo</th><th>Lowest 30d</th><th>Stock</th></tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.source">
          <td>{{ row.source }}</td>
          <td>{{ row.regular }}</td>
          <td>{{ row.promo }}</td>
          <td>{{ row.lowest }}</td>
          <td>{{ row.stock }}</td>
        </tr>
      </tbody>
    </table>
    <p class="vf-label vs-label">Stock in Source A</p>
    <div class="vs-stock">
      <template v-for="(item, index) in stock" :key="item.label">
        <span v-if="index" class="vs-operator vf-muted" aria-hidden="true">{{ index === stock.length - 1 ? '=' : '−' }}</span>
        <div class="vs-stock-item" :class="{ 'vs-stock-item--strong': item.strong }">
          <b>{{ item.value }}</b>
          <span class="vf-muted">{{ item.label }}</span>
        </div>
      </template>
    </div>
  </VisualFrame>
</template>

<style scoped>
.vs-label {
  margin-top: 20px;
}

.vs-stock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(61, 45, 36, 0.05);
}

.vs-stock-item {
  display: grid;
  justify-items: center;
  gap: 2px;
  font-size: 12px;
}

.vs-stock-item b {
  font-size: 20px;
  line-height: 1.2;
}

.vs-stock-item--strong b {
  color: var(--site-positive);
}

.vs-operator {
  font-size: 16px;
}
</style>
