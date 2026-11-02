<script setup lang="ts">
import { computed, ref } from 'vue'
import retroPoster from '../assets/retro-poster-trim.png'
import AccessCta from '../components/AccessCta.vue'
import SiteButton from '../components/SiteButton.vue'
import PageShell from '../components/PageShell.vue'

const panels = [
  {
    tab: 'Products and offers',
    note: 'Inventory, catalog, channels',
    title: 'From inventory to sales channel',
    flow: 'Inventory source → product catalog → store or marketplace channel',
    items: [
      {
        title: 'Facts from each source',
        text: 'Products, codes, prices and stock are collected per inventory system. A channel can build its offer from several sources.',
      },
      {
        title: 'One product catalog',
        text: 'A catalog card holds product identity, the code registry, content, media and attributes, separate from source facts.',
      },
      {
        title: 'Channels with explicit rules',
        text: 'Each channel decides which products it admits and whether a value follows the source or is maintained by hand.',
      },
      {
        title: 'Controlled writes',
        text: 'Readiness and export state are shown per product. Writes to a connected store or marketplace run on a schedule, on request, or not at all.',
      },
    ],
  },
  {
    tab: 'Sales documents',
    note: 'Source, Integly, connected systems',
    title: 'Collected once, delivered where needed',
    flow: 'Receipts, invoices, credit and debit notes, returns, corrections',
    items: [
      {
        title: 'Complete records',
        text: 'Documents are stored with their lines, taxes, payments and relations, in the form provided by the source.',
      },
      {
        title: 'Daily completeness',
        text: 'The sender declares each day, so missing or differing days are visible and can be fetched again from the source.',
      },
      {
        title: 'Delivery to connected systems',
        text: 'Documents are delivered with a result per document. A refused document does not hold up the others.',
      },
      {
        title: 'Orders in preparation',
        text: 'Orders from sales channels are not available yet. They will remain separate from documents.',
      },
    ],
  },
  {
    tab: 'Integrations and operations',
    note: 'Access, schedules, run history',
    title: 'Connections and processing you can check',
    flow: 'Systems send data to Integly, receive deliveries, or read data on request',
    items: [
      {
        title: 'Scoped access',
        text: 'Each connection has its own credentials and functions, with access granted per resource.',
      },
      {
        title: 'Read access on request',
        text: 'A connected system can read products and promotions through the API, limited to the source or channel set for that connection.',
      },
      {
        title: 'Run history',
        text: 'Imports, exports and deliveries appear in one operations view with their direction, status and failure reason.',
      },
      {
        title: 'Accounts and roles',
        text: 'Organizations group accounts. Each account is a data boundary with its own users and roles.',
      },
    ],
  },
]

const activeTab = ref(0)
const activePanel = computed(() => panels[activeTab.value] ?? panels[0]!)
</script>

<template>
  <PageShell>
    <section class="site-hero">
      <p class="site-eyebrow">Integration platform</p>
      <h1 class="site-h1">Product and sales data,<br>connected across your systems.</h1>
      <p class="site-lead">
        Integly connects inventory systems, online stores and marketplaces. It maintains a shared product catalog, prepares offers
        for each sales channel and delivers sales documents to the systems you connect.
      </p>
      <div class="home-actions">
        <SiteButton href="/features/">See features</SiteButton>
        <SiteButton href="/pricing/" variant="secondary">See pricing</SiteButton>
      </div>
    </section>

    <section class="site-section home-overview">
      <div class="home-tabs">
        <button
          v-for="(panel, index) in panels"
          :key="panel.tab"
          class="home-tab"
          :class="{ active: activeTab === index }"
          type="button"
          :aria-pressed="activeTab === index"
          @click="activeTab = index"
        >
          <span class="home-tab-title">{{ panel.tab }}</span>
          <span class="home-tab-note">{{ panel.note }}</span>
        </button>
      </div>

      <div class="home-panel">
        <div class="home-panel-head">
          <h2>{{ activePanel.title }}</h2>
          <p class="home-panel-flow">{{ activePanel.flow }}</p>
        </div>
        <ul class="home-panel-items">
          <li v-for="item in activePanel.items" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ul>
        <div class="home-panel-action">
          <SiteButton href="/features/" variant="secondary">See all features</SiteButton>
        </div>
      </div>
    </section>

    <template #closing>
      <section class="home-closing">
        <AccessCta />
        <img class="home-poster" :src="retroPoster" alt="" loading="lazy">
      </section>
    </template>
  </PageShell>
</template>

<style scoped>
.home-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.home-overview {
  display: grid;
  gap: var(--site-card-gap);
  max-width: var(--site-width-medium);
}

.home-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.home-tab {
  display: grid;
  gap: 4px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
  color: var(--site-ink);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: box-shadow 0.2s ease, background 0.2s ease;
}

.home-tab.active {
  border-color: var(--site-line);
  background: #ffffff;
  box-shadow: 0 10px 22px rgba(44, 28, 34, 0.18);
}

.home-tab-title {
  font-size: 13px;
  font-weight: 700;
}

.home-tab-note {
  font-size: 11px;
  color: var(--site-muted);
}

.home-panel {
  display: grid;
  gap: 24px;
  padding: 28px;
  border: 1px solid var(--site-line);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 24px 50px rgba(44, 28, 34, 0.12);
}

.home-panel-head h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}

.home-panel-flow {
  display: inline-block;
  margin: 12px 0 0;
  padding: 6px 12px;
  border-radius: 14px;
  background: rgba(61, 45, 36, 0.08);
  font-size: 12px;
}

.home-panel-items {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 32px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-panel-items h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
}

.home-panel-items p {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--site-muted);
}

.home-panel-action {
  display: flex;
  justify-content: center;
}

.home-closing {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  gap: 48px;
  padding: var(--site-section-gap) 0 0;
  background: #ffffff;
}

.home-poster {
  width: min(1200px, 92vw);
  mix-blend-mode: multiply;
}

@media (max-width: 900px) {
  .home-tabs,
  .home-panel-items {
    grid-template-columns: 1fr;
  }

  .home-panel {
    padding: 22px;
  }

  .home-closing > :first-child {
    padding: 0 var(--site-gutter);
  }
}
</style>
