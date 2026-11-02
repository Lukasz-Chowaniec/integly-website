<script setup lang="ts">
import VisualFrame from './VisualFrame.vue'

const CLOSED = new Set([3, 10, 17, 24])
const DIFFERS = new Set([14])
const days = Array.from({ length: 28 }, (_, index) => {
  const day = index + 1
  return { day, state: CLOSED.has(day) ? 'closed' : DIFFERS.has(day) ? 'differs' : 'complete' }
})
const legend = [
  { state: 'complete', label: 'Complete' },
  { state: 'differs', label: 'Differs' },
  { state: 'closed', label: 'Closed' },
]
</script>

<template>
  <VisualFrame title="Completeness of a month">
    <div class="vd-grid">
      <span v-for="item in days" :key="item.day" class="vd-day" :class="`vd-day--${item.state}`">{{ item.day }}</span>
    </div>
    <div class="vd-legend">
      <span v-for="item in legend" :key="item.state" class="vf-muted"><i class="vd-swatch" :class="`vd-day--${item.state}`" aria-hidden="true" />{{ item.label }}</span>
    </div>
    <div class="vd-detail">
      <b>Day 14</b>
      <span><span class="vf-muted">Declared</span> 412</span>
      <span><span class="vf-muted">Received</span> 410</span>
      <span class="vf-chip vf-chip--attention">Differs</span>
    </div>
  </VisualFrame>
</template>

<style scoped>
.vd-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 6px;
}

.vd-day {
  display: grid;
  place-items: center;
  height: 36px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
}

.vd-day--complete {
  background: rgba(46, 125, 50, 0.12);
  color: var(--site-positive);
}

.vd-day--differs {
  background: var(--site-attention);
  color: #ffffff;
}

.vd-day--closed {
  background: rgba(61, 45, 36, 0.05);
  color: var(--site-muted);
}

.vd-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 14px;
  font-size: 12px;
}

.vd-legend > span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.vd-swatch {
  width: 10px;
  height: 10px;
  border-radius: 3px;
}

.vd-detail {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;
  margin-top: 16px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(61, 45, 36, 0.05);
}
</style>
