<script setup lang="ts">
import { computed } from 'vue'
import Default from "@/layouts/Default.vue";
import { useTyping } from '@/composables/useTyping';
import { useLocale } from '@/composables/useLocale';

const { t } = useLocale()
const fullText = computed(() => t('skill.subtitle'))
const { displayedText, isTyping } = useTyping(fullText, 50)
const fullTextLength = computed(() => fullText.value.length)
</script>
<template>
  <Default>
    <div class="relative w-full pt-16 md:pt-0 overflow-x-hidden">
      <main class="w-full max-w-full box-border flex flex-col md:flex-row px-4 pb-16 sm:px-6 md:px-8 lg:px-12 xl:px-20 xl:pt-16">
        <!-- Left Content Section -->
        <section class="w-full max-w-full md:w-[70%] lg:w-[75%] flex flex-col gap-6 md:gap-8 lg:gap-10 break-words">
          <!-- Title Section -->
          <header class="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <h1 class="font-heading text-deep-black m-0 font-bold text-[clamp(2.5rem,8vw,6rem)] leading-normal break-words">
              {{ t('skill.title') }}
            </h1>
            <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed break-words typewriter">
              {{ displayedText }}<span v-if="isTyping || displayedText.length === fullTextLength" class="cursor">|</span>
            </p>
          </header>

          <!-- Skills Grid -->
          <div class="flex flex-col gap-8 md:gap-10 lg:gap-12 mt-4 md:mt-6">
            <!-- Frontend Section -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1.25rem,3vw,1.75rem)]">
                {{ t('skill.sections.frontend') }}
              </h2>
              <div class="skill-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>Vuejs:</strong> Vuex/Pinia, Vue Router, Option API/Composition API, Mixins/Composable, Lifecycle Hooks,  Asynchronous, Axios, Chart.js, performance optimization...
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>Nuxt.js:</strong> SSR, Lifecycle Hooks, Nuxt Image, Route Middleware...
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>Jquery:</strong> DataTables, Select2, jQuery Validation.
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>CSS:</strong> Tailwind, BootstrapVue, SCSS.
                </p>
              </div>
            </article>

            <!-- Backend Section -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1.25rem,3vw,1.75rem)]">
                {{ t('skill.sections.backend') }}
              </h2>
              <div class="skill-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>Nodejs:</strong> routing, validation, middleware, DB integration, auth flows.
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>Laravel:</strong> Experience with routing, middleware, authentication, eloquent ORM, queues, caching, and event handling.
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>Codeigniter:</strong> HMVC, SSR, Routing, ...
                </p>
              </div>
            </article>

            <!-- DBMS Section -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1.25rem,3vw,1.75rem)]">
                {{ t('skill.sections.dbms') }}
              </h2>
              <div class="skill-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>PostgreSQL/MySQL:</strong> Basic knowledge of joins, stored procedures, indexing, triggers, and query optimization.
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>MongoDB:</strong> Basic data modeling and indexing.
                </p>
              </div>
            </article>

            <!-- Deploy Section -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 400, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1.25rem,3vw,1.75rem)]">
                {{ t('skill.sections.deploy') }}
              </h2>
              <div class="skill-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full">
                  <strong>CI/CD:</strong> GitHub Actions, VPS (self hosted).
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  </Default>
</template>

<style scoped>
.skill-item-border {
  border-left: 1px solid var(--color-deep-black);
}
</style>