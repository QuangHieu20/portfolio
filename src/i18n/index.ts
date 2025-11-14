import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

// Lấy locale từ localStorage hoặc dùng default (an toàn với SSR/SSG)
const getInitialLocale = (): 'en' | 'vi' => {
  // Kiểm tra xem có phải môi trường browser không
  if (typeof window === 'undefined') {
    return 'en'
  }
  
  try {
    const savedLocale = localStorage.getItem('locale') as 'en' | 'vi' | null
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'vi')) {
      return savedLocale
    }
  } catch (error) {
    // localStorage có thể không available trong một số trường hợp
    console.warn('Failed to access localStorage:', error)
  }
  
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
  },
})

export default i18n

