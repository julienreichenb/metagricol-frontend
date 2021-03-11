import Vue from "vue"
import VueRouter from "vue-router"
import { Trans } from '../i18n/translationHandler'

Vue.use(VueRouter)

const load = (component) => {
  return () => import(`@/views/${component}.vue`)
}

const routes = [
  {
    path: '/:locale',
    component: load('Layout'),
    beforeEnter: Trans.routeMiddleware,
    children:[
      {
        path: '',
        name: 'Home',
        component: load('Home')
      },
    ]
  },
  {
    path: '*',
    redirect: () => Trans.defaultLocale
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router