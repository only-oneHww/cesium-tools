import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
