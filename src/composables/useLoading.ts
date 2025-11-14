import { ref, provide, inject } from 'vue'

const loadingSymbol = Symbol('loading')

export function useLoading() {
  const loading = ref(false)

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  return {
    loading,
    setLoading,
  }
}

export function provideLoading() {
  const { loading, setLoading } = useLoading()
  provide(loadingSymbol, { loading, setLoading })
  return { loading, setLoading }
}

export function injectLoading() {
  const loadingContext = inject<{ loading: { value: boolean }, setLoading: (value: boolean) => void }>(loadingSymbol)
  if (!loadingContext) {
    // Fallback nếu không có provider (cho trường hợp test hoặc component độc lập)
    const fallback = useLoading()
    return {
      loading: fallback.loading,
      setLoading: fallback.setLoading,
    }
  }
  return loadingContext
}

