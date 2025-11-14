<script setup lang="ts">
import { computed, ref, onActivated } from 'vue'
import { useTyping } from '@/composables/useTyping';
import { useLocale } from '@/composables/useLocale';
import Default from "@/layouts/Default.vue";


const { t } = useLocale()
const fullText = computed(() => t('connect.description'))
const { displayedText, isTyping } = useTyping(fullText, 40)
const fullTextLength = computed(() => fullText.value.length)

// Force re-render animation khi component được activated
const imageKey = ref(0)
onActivated(() => {
  imageKey.value++
})
</script>
<template>
  <Default>
    <div class="relative w-full min-h-screen pt-16 md:pt-0 overflow-x-hidden">
      <main class="relative w-full max-w-full box-border min-h-[calc(100vh-5rem)] md:min-h-screen flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 xl:pt-16">
        <!-- Left Content Section -->
        <section class="w-full max-w-full md:w-[60%] lg:w-[65%] flex flex-col gap-6 md:gap-8 lg:gap-10 break-words">
          <!-- Title Section -->
          <header class="flex flex-col gap-4 md:gap-6">
            <h1 class="font-heading text-deep-black m-0 font-bold text-[clamp(2.5rem,8vw,6rem)] leading-normal break-words">
              {{ t('connect.title') }}
            </h1>
            <p class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words max-w-full typewriter">
              {{ displayedText }}<span v-if="isTyping || displayedText.length === fullTextLength" class="cursor">|</span>
            </p>
          </header>

          <!-- Contact Information -->
          <div class="flex flex-col gap-3 md:gap-4 mt-4 md:mt-6">
            <p
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
              class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words"
            >
              <strong>{{ t('connect.contact.mail') }}:</strong> hieunq.work.dev@gmail.com
            </p>
            <p
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
              class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words"
            >
              <strong>{{ t('connect.contact.phone') }}:</strong> 0862171222
            </p>
            <p
              v-motion
              :initial="{ y: -50, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1, transition: { duration: 800, delay: 300, ease: 'easeOut' } }"
              class="text-deep-black m-0 font-normal text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed break-words"
            >
              <strong>{{ t('connect.contact.linkedin') }}:</strong> <a href="https://www.linkedin.com/in/hieunq-2000s/" target="_blank" rel="noopener noreferrer" class="text-deep-black hover:text-taupe transition-colors underline">https://www.linkedin.com/in/hieunq-2000s/</a>
            </p>
          </div>
        </section>

        <!-- Right Image Section - Fixed at bottom right on desktop -->
        <aside
          :key="imageKey"
          v-motion
          :initial="{ x: 100, opacity: 0 }"
          :visible-once="{ x: 0, opacity: 1, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
          class="w-full max-w-full md:w-auto md:absolute md:right-[18rem] md:bottom-0 md:pr-12 lg:pr-20 md:pb-12 lg:pb-0 mt-8 md:mt-0 flex items-end justify-end"
        >
          <div class="w-full max-w-full md:w-[clamp(200px,25vw,550px)]">
            <img 
              src="/contact_image.png" 
              alt="Nguyen Quang Hieu" 
              class="w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </aside>
      </main>
    </div>
  </Default>
</template>

<style scoped>
</style>