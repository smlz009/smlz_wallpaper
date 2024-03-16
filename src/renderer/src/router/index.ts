import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@renderer/views/home.vue')
const Setting = () => import('@renderer/views/setting.vue')

const routes = [
  { path: '/:any(.*)*', name: 'home', component: Home },
  { path: '/setting', name: 'setting', component: Setting }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
