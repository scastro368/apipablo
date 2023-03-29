import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboardView from '../views/dashboardusuario/dashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path:'/dashboard',
    component: dashboardView,
    Children:[
      {
        path:"/verusuarios",
        name:'verusuarios',
        component: () => import('../views/dashboardusuario/verusuariosView.vue')
      },
      {
        path:"/crearusuarios",
        name:'crearusuarios',
        component: () => import('../components/PostComponent.vue')
      }
    ]
   },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
