import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Dashboard.vue';
import Signup from "../components/Signup.vue"
import Login from "../components/Login.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        component : () => import(/*  */ '../components/Pages/Home.vue')
      },
      {
        path: '/edit-profile',
        component : () => import(/*  */ '../components/Pages/EditProfile.vue')
      },
      {
        path: '/logout',
        component : () => import(/*  */ '../components/Pages/Logout.vue')
      },
    ]

  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
