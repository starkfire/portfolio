import Vue from 'vue'
import VueRouter from 'vue-router'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: Resume,
    meta: {
      title: 'Pocholo Pantoja | Resume'
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
})

export default router
