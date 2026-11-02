<script setup lang="ts">
import VisualFrame from './VisualFrame.vue'

const runs = [
  { time: '10:42', name: 'Export to online store', scope: '120 products', state: 'Read back', tone: 'ok' },
  { time: '10:30', name: 'Stock update', scope: '860 products', state: 'Read back', tone: 'ok' },
  { time: '10:15', name: 'Export to marketplace', scope: '14 offers', state: '2 differ', tone: 'attention' },
  { time: '09:45', name: 'Import from Source A', scope: '3,200 products', state: 'Completed', tone: 'neutral' },
]
</script>

<template>
  <VisualFrame title="Runs">
    <div class="vr-rows">
      <div v-for="run in runs" :key="run.time" class="vr-row">
        <span class="vf-muted">{{ run.time }}</span>
        <span class="vr-name"><b>{{ run.name }}</b><span class="vf-muted">{{ run.scope }}</span></span>
        <span class="vf-chip" :class="`vf-chip--${run.tone}`">{{ run.state }}</span>
      </div>
    </div>
    <div class="vr-detail">
      <p class="vf-label">Value compared after writing</p>
      <div class="vr-compare">
        <span><span class="vf-muted">Sent</span><b>16.90</b></span>
        <span class="vf-muted" aria-hidden="true">=</span>
        <span><span class="vf-muted">Read back</span><b>16.90</b></span>
      </div>
    </div>
  </VisualFrame>
</template>

<style scoped>
.vr-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  padding: 11px 0;
  border-top: 1px solid var(--site-line);
}

.vr-name {
  display: grid;
  gap: 1px;
}

.vr-name b {
  font-weight: 500;
}

.vr-detail {
  margin-top: 8px;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(61, 45, 36, 0.05);
}

.vr-compare {
  display: flex;
  align-items: center;
  gap: 18px;
}

.vr-compare > span {
  display: grid;
  gap: 2px;
}

.vr-compare b {
  font-size: 20px;
  line-height: 1.2;
}
</style>
