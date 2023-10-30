import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/login',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/peliculas',
      name: 'peliculas',
      component: () => import('../views/Peliculas.vue')
    },
    {
      path: '/turnos',
      name: 'turnos',
      component: () => import('../views/Turnos.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/Perfil.vue')
    },
    {
      path: '/addMovie',
      name: 'addMovie',
      component: () => import('../views/CrearPelicula.vue')
    },
    {
      path: '/editMovie/:id',
      name: 'editMovie',
      component: () => import('../views/EditarPelicula.vue')
    },
    {
      path: '/addTurno',
      name: 'addTurno',
      component: () => import('../views/CrearTurno.vue')
    },
    {
      path: '/editTurno/:id',
      name: 'editTurno',
      component: () => import('../views/EditarTurno.vue')
    },
    {
      path: '/asignarTurno/:id',
      name: 'asignarTurno',
      component: () => import('../views/AsignarTurnos.vue')
    }
  ]
})

/*router.beforeEach (async (to) =>{
  const publiPages = ['/login'];
  const authRequired = !publiPages.includes(to.path)
})*/

export default router
