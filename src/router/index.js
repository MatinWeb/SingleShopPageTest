import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Hambodsho from '@/views/Hambodsho.vue'
import Hamgardi from '@/views/Hamgardi.vue'
import Work from '@/views/Work.vue'
import Journal from '@/views/Journal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/hambodsho',
    name: 'Hambodsho',
    component: Hambodsho,
  },
  {
    path: '/hamgardi',
    name: 'Hamgardi',
    component: Hamgardi,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
