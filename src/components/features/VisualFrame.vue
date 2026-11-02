<script setup lang="ts">
/** Ramka elementu wizualnego na stronie Features: tytuł i oznaczenie danych przykładowych. Klasy `vf-*` obejmują treść slotu. */
defineProps<{ title: string }>()
</script>

<template>
  <figure class="vf">
    <figcaption class="vf-head">
      <span class="vf-title">{{ title }}</span>
      <span class="vf-sample">Sample data</span>
    </figcaption>
    <slot />
  </figure>
</template>

<style>
.vf {
  margin: 0;
  padding: 24px;
  border: 1px solid var(--site-line);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 24px 50px rgba(44, 28, 34, 0.12);
  font-size: 13px;
  line-height: 1.4;
  font-variant-numeric: tabular-nums;
}

.vf-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.vf-title {
  font-size: 15px;
  font-weight: 700;
}

.vf-sample {
  flex: none;
  font-size: 11px;
  color: var(--site-muted);
}

.vf-label {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--site-muted);
}

.vf-muted {
  color: var(--site-muted);
}

.vf-table {
  width: 100%;
  border-collapse: collapse;
}

.vf-table th {
  padding: 0 0 8px;
  font-size: 11px;
  font-weight: 500;
  text-align: right;
  color: var(--site-muted);
}

.vf-table td {
  padding: 10px 0;
  border-top: 1px solid var(--site-line);
  text-align: right;
}

.vf-table th:first-child,
.vf-table td:first-child {
  text-align: left;
}

.vf-table td:first-child {
  font-weight: 500;
}

.vf-chip {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(61, 45, 36, 0.08);
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
}

.vf-chip--ok {
  background: rgba(46, 125, 50, 0.12);
  color: var(--site-positive);
}

.vf-chip--attention {
  background: rgba(180, 83, 9, 0.12);
  color: var(--site-attention);
}
</style>
