import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'   // ← Faltava isso

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [  {
      path: '/',       // URL da rota
      name: 'Home',    // nome opcional
      component: Home, // view importada
    },],
})

export default router
