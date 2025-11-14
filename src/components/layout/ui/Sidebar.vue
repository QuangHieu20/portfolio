<template>
  <aside class="md:fixed md:right-0 md:top-1/2 md:-translate-y-1/2 md:min-h-0 md:h-[90vh] md:w-20 flex md:flex-col items-center md:items-start justify-start md:justify-between md:px-2 md:py-8 border-l-0 md:border-l border-gray-300">
    <div class="w-full flex md:flex-col items-center md:items-end justify-between    gap-4 md:gap-8 md:h-full md:pt-2 px-4 py-2 md:px-0 md:py-0">
      <!-- Navigation Links -->
      <nav class="order-1 md:order-none flex items-center md:flex-col gap-4 md:gap-6 md:items-center md:w-full">
        <a
          href="mailto:hieunq.work.dev@gmail.com"
          class="text-deep-black text-sm md:text-base hover:text-taupe transition-colors md:block md:w-full md:[transform:rotate(90deg)] md:whitespace-nowrap md:overflow-hidden md:truncate md:h-6 md:leading-6 md:mt-16"
        >
          Gmail
        </a>
        <a
          href="https://www.linkedin.com/in/hieunq-2000s/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-deep-black text-sm md:text-base hover:text-taupe transition-colors md:block md:w-full md:[transform:rotate(90deg)] md:whitespace-nowrap md:overflow-hidden md:truncate md:h-6 md:leading-6 md:mt-8 md:first:mt-0"
        >
          Linked
        </a>
        <a
          href="https://github.com/QuangHieu20"
          target="_blank"
          rel="noopener noreferrer"
          class="text-deep-black text-sm md:text-base hover:text-taupe transition-colors md:block md:w-full md:[transform:rotate(90deg)] md:whitespace-nowrap md:overflow-hidden md:truncate md:h-6 md:leading-6 md:mt-8 md:first:mt-0"
        >
          Github
        </a>
        <div class="hidden md:block w-[1px] h-64 bg-black mt-16"></div>
      </nav>

      <!-- Language Toggle Button -->
      <div
        @click="toggleLocale"
        class="order-2 md:order-none text-deep-black text-sm hover:text-taupe transition-colors px-2 py-1 cursor-pointer md:hidden"
      >
        {{ locale.toUpperCase() }}
      </div>

      <!-- Bottom section: Copyright - Desktop only -->
      <div class="hidden md:flex md:flex-col gap-6 md:items-start md:w-full">
        <p class="text-deep-black text-sm md:text-base hover:opacity-70 transition-opacity md:block md:w-full md:[transform:rotate(90deg)] md:whitespace-nowrap md:overflow-hidden md:truncate md:h-6 md:leading-6 md:mt-8 md:first:mt-0">{{ t('menu.copyright') }}</p>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { t, locale, toggleLocale } = useLocale();
</script>

