import Login from '@/pages/Login'
import ToDo from '@/pages/ToDo'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  { path: '/todo', name: 'todo', component: ToDo }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
