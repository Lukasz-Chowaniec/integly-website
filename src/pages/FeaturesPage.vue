<script setup lang="ts">
import type { Component } from 'vue'
import AccessCta from '../components/AccessCta.vue'
import PageShell from '../components/PageShell.vue'
import VisualAccess from '../components/features/VisualAccess.vue'
import VisualCatalog from '../components/features/VisualCatalog.vue'
import VisualChannels from '../components/features/VisualChannels.vue'
import VisualCompleteness from '../components/features/VisualCompleteness.vue'
import VisualRuns from '../components/features/VisualRuns.vue'
import VisualSources from '../components/features/VisualSources.vue'

/** Obszary, które działają dziś. Liczby w elementach wizualnych są przykładowe i tak oznaczone; w tekście liczb nie ma. */
const areas: Array<{ area: string; statement: string; facts: string[]; visual: Component }> = [
  {
    area: 'Product catalog',
    statement: 'One card for each product, whichever system it comes from.',
    facts: [
      'A code registry ties barcodes and source codes to one card.',
      'Content, media and attributes are kept on the card.',
      'Proposed content is reviewed before it is accepted.',
    ],
    visual: VisualCatalog,
  },
  {
    area: 'Inventory sources',
    statement: 'Each source keeps its own prices and stock.',
    facts: [
      'Several inventory systems in one account, kept apart.',
      'Regular, promotional and lowest 30-day prices per source.',
      'Available stock is calculated, not copied.',
    ],
    visual: VisualSources,
  },
  {
    area: 'Sales channels',
    statement: 'Each channel controls what it sells and what it sends.',
    facts: [
      'Store and marketplace channels share one model.',
      'Channel policy decides which products enter.',
      'Sending runs on a schedule, on request, or stays off.',
    ],
    visual: VisualChannels,
  },
  {
    area: 'Proof of writes',
    statement: 'A write counts when it has been read back.',
    facts: [
      'After sending, Integly reads the value back and compares it.',
      'Each product keeps its export history.',
      'Runs are listed with direction, status and reason.',
    ],
    visual: VisualRuns,
  },
  {
    area: 'Sales documents',
    statement: 'Each day of sales is declared and compared.',
    facts: [
      'The sender declares the count and gross total of each day.',
      'Days that differ can be fetched again from the source.',
      'Other systems receive documents through the API, with a result per document.',
    ],
    visual: VisualCompleteness,
  },
  {
    area: 'Organizations and access',
    statement: 'Each account is a boundary for its data.',
    facts: [
      'Organizations group accounts.',
      'Roles and permissions are set per account.',
      'Each connection has its own key and grants.',
    ],
    visual: VisualAccess,
  },
]
</script>

<template>
  <PageShell>
    <section class="site-hero">
      <p class="site-eyebrow">Features</p>
      <h1 class="site-h1">What Integly does</h1>
      <p class="site-lead">One product catalog between your inventory systems and sales channels, with a record of what was sent.</p>
    </section>

    <section
      v-for="(item, index) in areas"
      :key="item.area"
      class="site-section features-area"
      :class="{ 'features-area--reverse': index % 2 === 1 }"
    >
      <div class="features-copy">
        <p class="site-eyebrow">{{ item.area }}</p>
        <h2 class="site-h2">{{ item.statement }}</h2>
        <ul class="features-facts">
          <li v-for="fact in item.facts" :key="fact">{{ fact }}</li>
        </ul>
      </div>
      <component :is="item.visual" class="features-visual" />
    </section>

    <p class="features-orders">Orders from sales channels are in preparation.</p>

    <section class="site-section features-end">
      <AccessCta />
    </section>
  </PageShell>
</template>

<style scoped>
.features-area {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  align-items: center;
  gap: 64px;
  margin-bottom: 112px;
}

.features-area--reverse {
  grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
}

.features-area--reverse .features-copy {
  order: 2;
}

.features-copy {
  display: grid;
  gap: 14px;
}

.features-facts {
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.features-facts li {
  padding: 12px 0;
  border-top: 1px solid var(--site-line);
  font-size: 15px;
  line-height: 1.5;
  color: var(--site-muted);
}

.features-orders {
  margin: 0 auto 56px;
  font-size: 14px;
  text-align: center;
  color: var(--site-muted);
}

.features-end {
  margin-bottom: 96px;
}

@media (max-width: 900px) {
  .features-area,
  .features-area--reverse {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
    margin-bottom: 72px;
  }

  .features-area--reverse .features-copy {
    order: 0;
  }
}
</style>
