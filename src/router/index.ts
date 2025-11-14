import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes
})

//Set page title and meta description after each route change
router.afterEach((to) => {
  // set title
  if (to.meta.title) document.title = to.meta.title as string

  // set meta description
  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description as string)
  } else if (to.meta.description) {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = to.meta.description as string
    document.head.appendChild(meta)
  }
})

export default router

