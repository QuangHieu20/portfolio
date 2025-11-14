<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)

onMounted(() => {
  router.beforeEach((to, from, next) => {
    if (from.name !== to.name) {
      isLoading.value = true
    }
    next()
  })

  router.afterEach(async () => {
    await nextTick()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isLoading.value = false
      })
    })
  })
})
</script>

<template>
  <router-view />
  <!-- Loading Overlay -->
  <Transition name="page-loader">
    <div v-if="isLoading" class="page-loader-overlay"></div>
  </Transition>
</template>

<style scoped>
.page-loader-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background-color: #A2988B;
  z-index: 9999;
  pointer-events: none;
}

.page-loader-enter-active {
  animation: slideInFromRight 0.8s ease-in-out forwards;
}

.page-loader-leave-active {
  animation: slideOutToLeft 0.8s ease-in-out forwards;
}

@keyframes slideInFromRight {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes slideOutToLeft {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
