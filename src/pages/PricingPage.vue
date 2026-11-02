<script setup lang="ts">
import { ref } from 'vue'
import PageShell from '../components/PageShell.vue'

/** Bez cen i nazw planów: nie są ustalone. Tabela podaje stan funkcji, a nie pakiety. */
const areas = [
  {
    name: 'Products and offers',
    description: 'For teams that maintain a product catalog and sell through online stores or marketplaces.',
    features: ['Inventory sources', 'Product catalog', 'Store and marketplace channels', 'Scheduled or manual export'],
  },
  {
    name: 'Sales documents',
    description: 'For teams that collect sales documents from their sources and pass them on to other systems.',
    features: ['Documents with lines, taxes and payments', 'Daily completeness checks', 'Delivery to connected systems', 'Sales charts per source'],
  },
  {
    name: 'Integrations and access',
    description: 'For connecting other systems and managing who can do what in each account.',
    features: ['Read API for connected systems', 'Separate access per connection', 'Roles and invitations', 'Several accounts in one organization'],
  },
]

const AVAILABLE = 'Available'
const IN_PREPARATION = 'In preparation'

const scope = [
  {
    section: 'Products and offers',
    rows: [
      ['Inventory sources', AVAILABLE],
      ['Product catalog', AVAILABLE],
      ['Product tags', AVAILABLE],
      ['Online store channels', AVAILABLE],
      ['Marketplace channels', AVAILABLE],
    ],
  },
  {
    section: 'Documents and orders',
    rows: [
      ['Sales documents', AVAILABLE],
      ['Daily completeness checks', AVAILABLE],
      ['Delivery to connected systems', AVAILABLE],
      ['Orders from sales channels', IN_PREPARATION],
    ],
  },
  {
    section: 'Integrations and access',
    rows: [
      ['Read API', AVAILABLE],
      ['Roles and permissions per account', AVAILABLE],
      ['User invitations', AVAILABLE],
      ['Run history and schedules', AVAILABLE],
    ],
  },
]

const faqs = [
  {
    question: 'Why are there no prices on this page?',
    answer: 'Public prices have not been set yet. Plans and limits are applied per account.',
  },
  {
    question: 'What do plan limits apply to?',
    answer: 'Limits apply to how often operations such as imports and exports can run in a given time window.',
  },
  {
    question: 'Which inventory systems, stores and marketplaces are supported?',
    answer: 'Integly connects to each system through a dedicated adapter, and not every system has one yet. Contact bok@integly.pl to confirm your systems before planning a rollout.',
  },
  {
    question: 'How do new users get access?',
    answer: 'By invitation from an account administrator. The invitation link lets the person set a password.',
  },
  {
    question: 'Are orders included?',
    answer: 'Not yet. Orders from sales channels are in preparation. Sales documents are available today.',
  },
]

const openFaqIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>

<template>
  <PageShell>
    <section class="site-hero">
      <p class="site-eyebrow">Pricing</p>
      <h1 class="site-h1">Prices are not published yet.</h1>
      <p class="site-lead">Plans and limits are set per account. This page describes the scope of the platform today.</p>
    </section>

    <section class="site-section pricing-cards">
      <article v-for="area in areas" :key="area.name" class="site-card pricing-card">
        <h3>{{ area.name }}</h3>
        <p>{{ area.description }}</p>
        <ul class="pricing-features">
          <li v-for="feature in area.features" :key="feature">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            {{ feature }}
          </li>
        </ul>
      </article>
    </section>

    <section class="site-section site-section--narrow">
      <div class="site-section-head">
        <h2 class="site-h2">What is available today</h2>
      </div>
      <table class="pricing-table">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody v-for="group in scope" :key="group.section">
          <tr class="pricing-table-section">
            <td colspan="2">{{ group.section }}</td>
          </tr>
          <tr v-for="[capability, status] in group.rows" :key="capability">
            <td>{{ capability }}</td>
            <td :class="{ 'pricing-table-pending': status === IN_PREPARATION }">{{ status }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="site-section site-section--narrow">
      <div class="site-section-head">
        <h2 class="site-h2">Frequently asked questions</h2>
      </div>
      <div class="pricing-faq">
        <div v-for="(faq, index) in faqs" :key="faq.question" class="pricing-faq-item">
          <button type="button" :aria-expanded="openFaqIndex === index" @click="toggleFaq(index)">
            <span>{{ faq.question }}</span>
            <svg :class="{ open: openFaqIndex === index }" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <p v-if="openFaqIndex === index">{{ faq.answer }}</p>
        </div>
      </div>
    </section>
  </PageShell>
</template>

<style scoped>
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--site-card-gap);
}

.pricing-card {
  display: flex;
  flex-direction: column;
}

.pricing-features {
  flex: 1;
  display: grid;
  align-content: start;
  gap: 12px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.pricing-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.4;
}

.pricing-features svg {
  flex: none;
  width: 18px;
  height: 18px;
  color: #2e7d32;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.pricing-table th,
.pricing-table td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--site-line);
  text-align: left;
}

.pricing-table th {
  font-weight: 700;
  background: rgba(255, 255, 255, 0.3);
}

.pricing-table th:last-child,
.pricing-table td:last-child:not([colspan]) {
  width: 150px;
  color: var(--site-muted);
}

.pricing-table td.pricing-table-pending {
  font-weight: 700;
  color: var(--site-ink);
}

.pricing-table-section td {
  padding: 16px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.pricing-faq {
  border-top: 1px solid var(--site-line);
}

.pricing-faq-item {
  border-bottom: 1px solid var(--site-line);
}

.pricing-faq-item button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 20px 0;
  border: none;
  background: none;
  color: var(--site-ink);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}

.pricing-faq-item svg {
  flex: none;
  width: 20px;
  height: 20px;
  color: var(--site-muted);
  transition: transform 0.3s ease;
}

.pricing-faq-item svg.open {
  transform: rotate(180deg);
}

.pricing-faq-item p {
  margin: 0;
  padding: 0 0 20px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--site-muted);
}

@media (max-width: 900px) {
  .pricing-cards {
    grid-template-columns: 1fr;
    max-width: 440px;
  }
}

@media (max-width: 480px) {
  .pricing-table th,
  .pricing-table td {
    padding: 12px 8px;
  }

  .pricing-table th:last-child,
  .pricing-table td:last-child:not([colspan]) {
    width: 118px;
  }
}
</style>
