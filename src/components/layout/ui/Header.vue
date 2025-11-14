<template>
  <header class="w-full px-4 py-6 md:px-8 md:py-8 md:absolute top-0 left-0 z-10 bg-beige-light">
    <div class="w-[80%] mx-auto flex justify-end items-center pr-1">
      <!-- Empty space on desktop, sidebar on mobile -->
      <div class="md:hidden"></div>
      <!-- Language selector - visible on desktop in header area -->
      <div 
        @click="toggleLocale"
        class="hidden md:block text-deep-black text-sm w-8 h-[18px] cursor-pointer hover:opacity-70 transition-opacity select-none"
      >
        {{ localeValue }}
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { locale, toggleLocale, initLocale } = useLocale()

const localeValue = computed(() => {
  return locale.value.toUpperCase()
})

onMounted(() => {
  initLocale()
})
</script>

<style scoped>
</style>

