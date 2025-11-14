<script setup lang="ts">
import { computed } from 'vue'
import { useTyping } from '@/composables/useTyping';
import { useLocale } from '@/composables/useLocale';
import Default from '@/layouts/Default.vue';
import { Locale } from '@/constants/locale';


const { t, locale } = useLocale()
const fullText = computed(() => t('home.description'))
const { displayedText, isTyping } = useTyping(fullText, 50)
const fullTextLength = computed(() => fullText.value.length)
const navLinkClass = computed(() => 
  locale.value === Locale.VI ? 'hover-animate nav-link-large-vi' : 'hover-animate nav-link-large'
)
</script>
<template>
  <Default>
    <div class="relative w-full md:pt-0 pt-16 md:h-[100vh] md:overflow-hidden overflow-x-hidden">
      <!-- Main Content Section -->
      <main
        class="w-full max-w-full box-border h-[100vh] flex flex-col xl:flex-row md:pt-60 xl:pt-0 justify-start xl:justify-between items-center gap-8 sm:gap-4 md:gap-12 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      >
        <!-- Left Column - Personal Info -->
        <section
          class="w-full max-w-full xl:w-[35%] h-auto xl:h-full flex justify-start md:justify-center xl:justify-start items-end xl:items-center"
        >
          <div
            class="w-full max-w-full sm:w-3/4 xl:w-full h-auto flex flex-col justify-center items-start gap-4 mt-0 xl:mt-[50%]"
          >
            <h1 class="m-0 text-deep-black break-words font-semibold text-[18px]">
              {{ t('common.name') }}ßß
            </h1>
            <h2 class="text-deep-black m-0 break-words font-normal text-[16px]">
              {{ t('common.title') }}
            </h2>
            <p class="text-deep-black m-0 font-normal text-[16px] break-words typewriter">
              {{ displayedText }}<span v-if="isTyping || displayedText.length === fullTextLength" class="cursor">|</span>
            </p>
          </div>
        </section>

        <!-- Right Column - Large Words -->
        <section
          class="w-full max-w-full xl:w-[70%] h-auto xl:h-full flex justify-center items-start xl:items-center"
        >
          <div
            class="w-full max-w-full md:w-3/4 xl:w-full flex flex-col justify-center items-start pl-0 sm:pl-2 md:pl-0 xl:pl-24"
          >
            <h2>
              <a
                v-motion
                :initial="{ y: -50, opacity: 0 }"
                :visible-once="{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 800, delay: 200, ease: 'easeOut' },
                }"
                href="/skill"
                :class="navLinkClass"
              >
                {{ t('home.nav.skill') }}
              </a>
            </h2>

            <h2>
              <a
                v-motion
                :initial="{ y: -50, opacity: 0 }"
                :visible-once="{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 800, delay: 200, ease: 'easeOut' },
                }"
                href="/work"
                :class="navLinkClass"
              >
                {{ t('home.nav.work') }}
              </a>
            </h2>

            <h2>
              <a
                v-motion
                :initial="{ y: -50, opacity: 0 }"
                :visible-once="{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 800, delay: 300, ease: 'easeOut' },
                }"
                href="/connect"
                :class="navLinkClass"
              >
                {{ t('home.nav.connect') }}
              </a>
            </h2>
          </div>
        </section>
      </main>
    </div>
  </Default>
</template>

