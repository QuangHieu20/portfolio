import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Skill from '@/views/Skill.vue'
import Work from '@/views/Work.vue'
import Connect from '@/views/Connect.vue'
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Home,
    component: Home,
    meta: {
      title: 'Portfolio — Hieu Nguyen Quang',
      description: 'Creative software developer portfolio',
    },
  },
  {
    path: '/skill',
    name: RouteName.Skill,
    component: Skill,
    meta: {
      title: 'Skill — Hieu Nguyen Quang | Software Developer',
      description:
          'Explore my technical skills in web development, including Vue.js, Nuxt, Laravel, Node.js, and modern frontend technologies that power fast and creative digital experiences.',
    },
  },
  {
    path: '/work',
    name: RouteName.Work,
    component: Work,
    meta: {
      title: 'Work — Hieu Nguyen Quang | Web Developer Portfolio',
      description:
        'A collection of projects I\'ve built and contributed to — from creative frontend designs to robust backend systems. Each project tells a story through code.',
    },
  },
  {
    path: '/connect',
    name: RouteName.Connect,
    component: Connect,
    meta: {
      title: 'Connect — Hieu Nguyen Quang | Let\'s Build Something Great',
      description: 'Let\'s connect! Whether it\'s a collaboration, freelance project, or just a friendly chat about code, feel free to reach out to me via email or social media.',
    },
  },
]

export default routes

