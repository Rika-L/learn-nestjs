import { createRouter } from 'vue-router'
import { getHistoryMode } from '@/router/utils.ts'
import routes from '@/router/routes.ts'

const { VITE_ROUTER_HISTORY } = import.meta.env

const router = createRouter({
  history: getHistoryMode(VITE_ROUTER_HISTORY),
  routes,
})

export default router
