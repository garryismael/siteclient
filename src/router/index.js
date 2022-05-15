// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Accueil',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'flatrate',
          name: 'Forfaits',
          component: () => import('@/views/flatrate/Index.vue'),
        },
        {
          path: 'memento',
          name: 'Mémento',
          component: () => import('@/views/memento/Index.vue'),
        },
      ],
    },

  ],
})

export default router
