<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import Header from '@/components/layout/ui/Header.vue';
  import Sidebar from '@/components/layout/ui/Sidebar.vue';
  import Menu from '@/components/layout/ui/Menu.vue';

  const router = useRoute();
</script>

<template>
  <div class="min-h-screen bg-beige-light text-deep-black overflow-x-hidden md:relative flex flex-col md:block">
    <!-- Header -->
    <Header />

    <div class="order-1 md:order-none">
      <Sidebar v-show="router.name === 'Home'" />
    </div>

    <div class="order-2 md:order-none">
      <Menu v-show="router.name !== 'Home'"/>
    </div>

    <!-- Main Layout Container -->
    <div class="order-3 md:order-none md:pr-20">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
