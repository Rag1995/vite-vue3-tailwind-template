import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

const history = createWebHashHistory(import.meta.env.BASE_URL)

const router = createRouter({
  history,
  routes,
})

export default router
