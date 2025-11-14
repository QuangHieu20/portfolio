<script setup lang="ts">
import { computed } from 'vue'
import { useTyping } from '@/composables/useTyping';
import { useLocale } from '@/composables/useLocale';
import Default from "@/layouts/Default.vue";


const { t } = useLocale()
const fullText = computed(() => t('work.description'))
const { displayedText, isTyping } = useTyping(fullText, 40)
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
              {{ t('work.title') }}
            </h1>
              <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,2vw,2rem)] leading-relaxed break-words">
                {{ t('work.intro') }}
              </p>
            <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full typewriter">
              {{ displayedText }}<span v-if="isTyping || displayedText.length === fullTextLength" class="cursor">|</span>
            </p>
          </header>

          <!-- Work Experience -->
          <div class="flex flex-col gap-8 md:gap-10 lg:gap-12 mt-4 md:mt-6">
            <!-- 2019-2020 HA PAYMENT JSC -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <div class="flex flex-col gap-1 md:gap-2">
                <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                  {{ t('work.experiences.haPayment.period') }}
                </h2>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed">
                  {{ t('work.experiences.haPayment.role') }}
                </p>
              </div>
              <div class="work-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-bold text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.haPayment.projectName') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.haPayment.description') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.technologyUsed') }}</strong> {{ t('work.experiences.haPayment.technology') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.tools') }}</strong> {{ t('work.experiences.haPayment.tools') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.teamSize') }}</strong> {{ t('work.experiences.haPayment.teamSize') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.customer') }}</strong> {{ t('work.experiences.haPayment.customer') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.responsibilities') }}</strong>
                </p>
                <ul class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full list-disc pl-5 md:pl-6 flex flex-col gap-1 md:gap-2">
                  <li>{{ t('work.experiences.haPayment.responsibilities.design') }}</li>
                  <li>{{ t('work.experiences.haPayment.responsibilities.implement') }}</li>
                  <li>{{ t('work.experiences.haPayment.responsibilities.optimize') }}</li>
                  <li>{{ t('work.experiences.haPayment.responsibilities.debug') }}</li>
                  <li>{{ t('work.experiences.haPayment.responsibilities.deploy') }}</li>
                </ul>
              </div>
            </article>

            <!-- 2020-2021 ESBT CO., LTD -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <div class="flex flex-col gap-1 md:gap-2">
                <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                  {{ t('work.experiences.esbt.period') }}
                </h2>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed">
                  {{ t('work.experiences.esbt.role') }}
                </p>
              </div>
              <div class="work-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-bold text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.esbt.projectName') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.esbt.description') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.technologyUsed') }}</strong> {{ t('work.experiences.esbt.technology') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.versionControl') }}</strong> {{ t('work.experiences.esbt.versionControl') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.teamSize') }}</strong> {{ t('work.experiences.esbt.teamSize') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.responsibilities') }}</strong>
                </p>
                <ul class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full list-disc pl-5 md:pl-6 flex flex-col gap-1 md:gap-2">
                  <li>{{ t('work.experiences.esbt.responsibilities.build') }}</li>
                  <li>{{ t('work.experiences.esbt.responsibilities.integrate') }}</li>
                  <li>{{ t('work.experiences.esbt.responsibilities.develop') }}</li>
                  <li>{{ t('work.experiences.esbt.responsibilities.implement') }}</li>
                </ul>
              </div>
            </article>

            <!-- 2021-2022 HOSTVN -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <div class="flex flex-col gap-1 md:gap-2">
                <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                  {{ t('work.experiences.hostvn.period') }}
                </h2>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed">
                  {{ t('work.experiences.hostvn.role') }}
                </p>
              </div>
              <div class="work-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-bold text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.hostvn.projectName') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.hostvn.description') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.technologyUsed') }}</strong> {{ t('work.experiences.hostvn.technology') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.versionControl') }}</strong> {{ t('work.experiences.hostvn.versionControl') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.teamSize') }}</strong> {{ t('work.experiences.hostvn.teamSize') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.customer') }}</strong> {{ t('work.experiences.hostvn.customer') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.responsibilities') }}</strong>
                </p>
                <ul class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full list-disc pl-5 md:pl-6 flex flex-col gap-1 md:gap-2">
                  <li>{{ t('work.experiences.hostvn.responsibilities.design') }}</li>
                  <li>{{ t('work.experiences.hostvn.responsibilities.integrate') }}</li>
                  <li>{{ t('work.experiences.hostvn.responsibilities.test') }}</li>
                  <li>{{ t('work.experiences.hostvn.responsibilities.contribute') }}</li>
                  <li>{{ t('work.experiences.hostvn.responsibilities.lead') }}</li>
                </ul>
              </div>
            </article>

            <!-- 2022-2025 TINH VAN GROUP -->
            <article
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 400, ease: 'easeOut' } }"
              class="flex flex-col gap-3 md:gap-4"
            >
              <div class="flex flex-col gap-1 md:gap-2">
                <h2 class="font-heading text-deep-black m-0 font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                  {{ t('work.experiences.tinhVan.period') }}
                </h2>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed">
                  {{ t('work.experiences.tinhVan.role') }}
                </p>
              </div>
              <div class="work-item-border flex flex-col gap-2 md:gap-3 pl-4 md:pl-6">
                <p class="text-deep-black m-0 font-bold text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.tinhVan.projectName') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.tinhVan.description') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.technologyUsed') }}</strong> {{ t('work.experiences.tinhVan.technology') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.versionControl') }}</strong> {{ t('work.experiences.tinhVan.versionControl') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.teamSize') }}</strong> {{ t('work.experiences.tinhVan.teamSize') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.customer') }}</strong> {{ t('work.experiences.tinhVan.customer') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.responsibilities') }}</strong>
                </p>
                <ul class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full list-disc pl-5 md:pl-6 flex flex-col gap-1 md:gap-2">
                  <li>{{ t('work.experiences.tinhVan.responsibilities.collaborate') }}</li>
                  <li>{{ t('work.experiences.tinhVan.responsibilities.develop') }}</li>
                  <li>{{ t('work.experiences.tinhVan.responsibilities.investigate') }}</li>
                  <li>{{ t('work.experiences.tinhVan.responsibilities.support') }}</li>
                  <li>{{ t('work.experiences.tinhVan.responsibilities.document') }}</li>
                </ul>
                <p class="text-deep-black m-0 font-bold text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full mt-3 md:mt-4">
                  {{ t('work.labels.projects') }}
                </p>
                <p class="text-deep-black m-0 font-bold text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.tinhVan.subProjects.title') }}
                </p>
                <ul class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full list-disc pl-5 md:pl-6 flex flex-col gap-1 md:gap-2">
                  <li>
                    <strong>{{ t('work.experiences.tinhVan.subProjects.items.marketplace.name') }}</strong> {{ t('work.experiences.tinhVan.subProjects.items.marketplace.description') }}
                  </li>
                  <li>
                    <strong>{{ t('work.experiences.tinhVan.subProjects.items.companyManagement.name') }}</strong> {{ t('work.experiences.tinhVan.subProjects.items.companyManagement.description') }}
                  </li>
                  <li>
                    <strong>{{ t('work.experiences.tinhVan.subProjects.items.dailyReport.name') }}</strong> {{ t('work.experiences.tinhVan.subProjects.items.dailyReport.description') }}
                  </li>
                  <li>
                    <strong>{{ t('work.experiences.tinhVan.subProjects.items.dltGw.name') }}</strong> {{ t('work.experiences.tinhVan.subProjects.items.dltGw.description') }}
                  </li>
                </ul>
                <p class="text-deep-black m-0 font-bold text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full mt-2 md:mt-3">
                  {{ t('work.experiences.tinhVan.subProject2.title') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  {{ t('work.experiences.tinhVan.subProject2.description') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.technology') }}</strong> {{ t('work.experiences.tinhVan.subProject2.technology') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.teamSize') }}</strong> {{ t('work.experiences.tinhVan.subProject2.teamSize') }}
                </p>
                <p class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full">
                  <strong>{{ t('work.labels.responsibilitiesLabel') }}</strong>
                </p>
                <ul class="text-deep-black m-0 font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-relaxed break-words max-w-full list-disc pl-5 md:pl-6 flex flex-col gap-1 md:gap-2">
                  <li>{{ t('work.experiences.tinhVan.subProject2.responsibilities.architect') }}</li>
                  <li>{{ t('work.experiences.tinhVan.subProject2.responsibilities.lead') }}</li>
                  <li>{{ t('work.experiences.tinhVan.subProject2.responsibilities.build') }}</li>
                  <li>{{ t('work.experiences.tinhVan.subProject2.responsibilities.collaborate') }}</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  </Default>
</template>

<style scoped>
.work-item-border {
  border-left: 1px solid var(--color-deep-black);
}
</style>