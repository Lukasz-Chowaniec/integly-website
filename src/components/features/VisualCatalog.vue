<script setup lang="ts">
import VisualFrame from './VisualFrame.vue'

const codes = [
  { code: '5901234123457', kind: 'Unit barcode', origin: 'Source A, Source B' },
  { code: '15901234123454', kind: 'Case of 6', origin: 'Source A' },
  { code: '10428', kind: 'Source code', origin: 'Source B' },
]
const content = [
  { label: 'Content', value: 'Reviewed' },
  { label: 'Media', value: '4 images' },
  { label: 'Attributes', value: '12 set' },
]
</script>

<template>
  <VisualFrame title="Product card">
    <div class="vc-product">
      <span class="vc-thumb" aria-hidden="true" />
      <span>
        <b class="vc-name">Sample Roast Coffee 250 g</b>
        <span class="vf-muted">Coffee and tea</span>
      </span>
    </div>
    <p class="vf-label">Code registry</p>
    <div class="vc-codes">
      <div v-for="row in codes" :key="row.code" class="vc-code">
        <span class="vc-code-value">{{ row.code }}</span>
        <span>{{ row.kind }}</span>
        <span class="vf-muted vc-code-origin">{{ row.origin }}</span>
      </div>
    </div>
    <div class="vc-content">
      <div v-for="item in content" :key="item.label">
        <span class="vf-muted">{{ item.label }}</span>
        <b>{{ item.value }}</b>
      </div>
    </div>
  </VisualFrame>
</template>

<style scoped>
.vc-product {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.vc-product > span:last-child {
  display: grid;
  gap: 2px;
}

.vc-thumb {
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(145deg, #f0a776, #f7db94);
}

.vc-name {
  font-size: 15px;
}

.vc-code {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr 1fr;
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid var(--site-line);
}

.vc-code-value {
  font-weight: 500;
}

.vc-code-origin {
  text-align: right;
}

.vc-content {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--site-line);
}

.vc-content > div {
  display: grid;
  gap: 2px;
}

@media (max-width: 480px) {
  .vc-code {
    grid-template-columns: 1fr auto;
    gap: 2px 12px;
  }

  .vc-code-origin {
    grid-column: 1 / -1;
    text-align: left;
  }
}
</style>
