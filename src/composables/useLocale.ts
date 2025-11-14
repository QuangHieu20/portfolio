import { useI18n } from 'vue-i18n'

export function useLocale() {
  const { locale, t } = useI18n()

  const setLocale = (lang: 'en' | 'vi') => {
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  const toggleLocale = () => {
    const newLocale = locale.value === 'en' ? 'vi' : 'en'
    setLocale(newLocale)
    window.location.reload()
  }
  // Khôi phục locale từ localStorage khi mount
  const initLocale = () => {
    const savedLocale = localStorage.getItem('locale') as 'en' | 'vi' | null
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'vi')) {
      locale.value = savedLocale
    }
  }

  return {
    locale,
    t,
    setLocale,
    toggleLocale,
    initLocale,
  }
}

