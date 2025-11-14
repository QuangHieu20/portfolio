
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useLocale } from '@/composables/useLocale';
import { RouteName } from '@/constants/route-names';

const router = useRoute();
const { t, locale, toggleLocale } = useLocale();
</script>

<template>
  <aside class="md:fixed md:right-0 md:top-1/2 md:-translate-y-1/2 md:min-h-0 md:h-[90vh] md:w-20 flex md:flex-col items-center md:items-start justify-start md:justify-between md:px-2 md:py-8 border-l-0 md:border-l border-gray-300">
    <div class="md:hidden w-full flex items-center justify-between px-4 py-2">
      <!-- Navigation Links - Mobile/Tablet -->
      <nav class="flex items-center gap-4">
        <a
          href="/"
          class="text-deep-black text-sm hover:text-taupe transition-colors"
        >
          {{ t('menu.home') }}
        </a>
        <a
          v-show="router.name !== RouteName.Skill"
          href="/skill"
          class="text-deep-black text-sm hover:text-taupe transition-colors"
        >
          {{ t('menu.skill') }}
        </a>
        <a
          v-show="router.name !== RouteName.Work"
          href="/work"
          class="text-deep-black text-sm hover:text-taupe transition-colors"
        >
          {{ t('menu.work') }}
        </a>
        <a
          v-show="router.name !== RouteName.Connect"
          href="/connect"
          class="text-deep-black text-sm hover:text-taupe transition-colors"
        >
          {{ t('menu.connect') }}
        </a>
      </nav>
      
      <!-- Language Toggle Button - Mobile/Tablet -->
      <div
        @click="toggleLocale"
        class="text-deep-black text-sm hover:text-taupe transition-colors px-2 py-1 cursor-pointer"
      >
        {{ locale.toUpperCase() }}
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:flex md:flex-col items-center md:items-end gap-4 md:gap-8 w-full md:w-full h-full pt-2 justify-between">
      <!-- Navigation Links - rotated on desktop -->
      <nav class="flex md:flex-col gap-6 md:items-center">
        <a
          href="/"
          class="text-deep-black text-sm md:text-base hover:text-taupe transition-colors md:block md:w-auto md:[transform:rotate(90deg)] md:whitespace-nowrap md:h-6 md:leading-6 md:mt-16"
        >
          {{ t('menu.home') }}
        </a>
        <a
          v-show="router.name !== RouteName.Skill"
          href="/skill"
          class="text-deep-black text-sm md:text-base hover:text-taupe transition-colors md:block md:w-auto md:[transform:rotate(90deg)] md:whitespace-nowrap md:h-6 md:leading-6 md:mt-12"
        >
          {{ t('menu.skill') }}
        </a>
        <a
          v-show="router.name !== RouteName.Work"
          href="/work"
          class="text-deep-black text-sm md:text-base hover:text-taupe transition-colors md:block md:w-auto md:[transform:rotate(90deg)] md:whitespace-nowrap md:h-6 md:leading-6 md:mt-12"
        >
          {{ t('menu.work') }}
        </a>
        <a
          v-show="router.name !== RouteName.Connect"
          href="/connect"
          class="text-deep-black text-sm md:text-base hover:text-taupe transition-colors md:block md:w-auto md:[transform:rotate(90deg)] md:whitespace-nowrap md:h-6 md:leading-6 md:mt-12"
        >
          {{ t('menu.connect') }}
        </a>
        <div class="w-[1px] h-64 bg-black mt-16"></div>
      </nav>

      <!-- Bottom section: Copyright -->
      <div class="flex md:flex-col gap-6 md:items-start md:w-full">
        <p class="text-deep-black text-sm md:text-base hover:opacity-70 transition-opacity md:block md:w-full md:[transform:rotate(90deg)] md:whitespace-nowrap md:overflow-hidden md:truncate md:h-6 md:leading-6 md:mt-8 md:first:mt-0">{{ t('menu.copyright') }}</p>
      </div>
    </div>
  </aside>
</template>
