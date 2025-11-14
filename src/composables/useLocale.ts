import { useI18n } from 'vue-i18n'
import { Locale } from '@/constants/locale'

export function useLocale() {
  const { locale, t } = useI18n()

  const setLocale = (lang: Locale) => {
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  const toggleLocale = () => {
    const newLocale = locale.value === Locale.EN ? Locale.VI : Locale.EN
    localStorage.setItem('locale', newLocale)
    window.location.reload()
  }
  
  // Khôi phục locale từ localStorage khi mount
  const initLocale = () => {
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && (savedLocale === Locale.EN || savedLocale === Locale.VI)) {
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

