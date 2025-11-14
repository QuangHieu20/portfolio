import { ref, onMounted, onUnmounted, watch, type Ref } from 'vue'

export function useTyping(text: string | Ref<string>, speed: number = 50) {
  const displayedText = ref('')
  const isTyping = ref(true)

  let typingInterval: ReturnType<typeof setInterval> | null = null

  const startTyping = () => {
    // Clear existing interval if any
    if (typingInterval) {
      clearInterval(typingInterval)
      typingInterval = null
    }

    displayedText.value = ''
    isTyping.value = true
    let currentIndex = 0
    const textValue = typeof text === 'string' ? text : text.value

    typingInterval = setInterval(() => {
      if (currentIndex < textValue.length) {
        displayedText.value = textValue.slice(0, currentIndex + 1)
        currentIndex++
      } else {
        isTyping.value = false
        if (typingInterval) {
          clearInterval(typingInterval)
          typingInterval = null
        }
      }
    }, speed)
  }

  onMounted(() => {
    startTyping()
  })

  // Watch for text changes (for i18n)
  if (typeof text !== 'string') {
    watch(text, () => {
      startTyping()
    })
  }

  onUnmounted(() => {
    if (typingInterval) {
      clearInterval(typingInterval)
    }
  })

  return {
    displayedText,
    isTyping,
  }
}

