<script setup lang="ts">
import VisualFrame from './VisualFrame.vue'

const people = [
  { name: 'A. Novak', north: 'Administrator', south: 'Administrator' },
  { name: 'K. Mills', north: 'Operator', south: '–' },
  { name: 'P. Reed', north: '–', south: 'Operator' },
]
</script>

<template>
  <VisualFrame title="Accounts and roles">
    <div class="va-tree">
      <div class="va-node va-node--org">Sample organization</div>
      <div class="va-branch" aria-hidden="true" />
      <div class="va-accounts">
        <div class="va-node">Account North</div>
        <div class="va-node">Account South</div>
      </div>
    </div>
    <table class="vf-table va-table">
      <thead>
        <tr><th>Person</th><th>North</th><th>South</th></tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.name">
          <td>{{ person.name }}</td>
          <td :class="{ 'vf-muted': person.north === '–' }">{{ person.north }}</td>
          <td :class="{ 'vf-muted': person.south === '–' }">{{ person.south }}</td>
        </tr>
      </tbody>
    </table>
  </VisualFrame>
</template>

<style scoped>
.va-tree {
  display: grid;
  justify-items: center;
  margin-bottom: 22px;
}

.va-node {
  padding: 10px 14px;
  border: 1px solid var(--site-line);
  border-radius: 12px;
  background: rgba(61, 45, 36, 0.05);
  font-weight: 500;
  text-align: center;
}

.va-node--org {
  background: var(--site-btn-bg);
  border-color: transparent;
  color: var(--site-btn-fg);
}

.va-branch {
  position: relative;
  width: 50%;
  height: 28px;
  border: 1px solid var(--site-btn-line);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  margin-top: 14px;
}

.va-branch::before {
  content: '';
  position: absolute;
  top: -14px;
  left: 50%;
  height: 14px;
  border-left: 1px solid var(--site-btn-line);
}

.va-accounts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
}

.va-table th:not(:first-child),
.va-table td:not(:first-child) {
  text-align: left;
  width: 36%;
}
</style>
