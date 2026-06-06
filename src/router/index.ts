import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DownloadPage from '@/pages/DownloadPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

// 禁用浏览器原生滚动恢复，由 Vue Router 统一管理滚动位置
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (_to.hash) return { el: _to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
