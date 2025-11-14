import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'
import { Locale } from '@/constants/locale'

// Lấy locale từ localStorage hoặc dùng default (an toàn với SSR/SSG)
const getInitialLocale = (): Locale => {
  // Kiểm tra xem có phải môi trường browser không
  if (typeof window === 'undefined') {
    return Locale.EN
  }
  
  try {
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && (savedLocale === Locale.EN || savedLocale === Locale.VI)) {
      return savedLocale
    }
  } catch (error) {
    // localStorage có thể không available trong một số trường hợp
    console.warn('Failed to access localStorage:', error)
  }
  
  return Locale.EN
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: Locale.EN,
  messages: {
    [Locale.EN]: en,
    [Locale.VI]: vi,
  },
})

export default i18n

