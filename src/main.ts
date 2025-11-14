import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'
import '@/style.css'
import 'uno.css'

createApp(App)
  .use(router)
  .use(MotionPlugin)
  .use(i18n)
  .mount('#app')
