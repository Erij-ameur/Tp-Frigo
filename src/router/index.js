import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AjoutPage from '../views/AjoutPage.vue'
import ModifPage from '../views/ModifPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/AjoutPage',
      name: 'AjoutPage',
      component: AjoutPage
    },
    {
      path: '/ModifPage',
      name: 'ModifPage',
      component: ModifPage,
      props: route => ({
        element: route.params.element
      })
    },
  ]
})

export default router
