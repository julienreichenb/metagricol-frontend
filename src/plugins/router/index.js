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
    component: () => import(`@/components/utils/PassThrough.vue`),
    beforeEnter: Trans.routeMiddleware,
    children:[
      {
        path: '',
        component: load('layout/LayoutNoSidebar'),
        children: [
          {
            path: '',
            name: 'Home',
            component: load('Home'),
          },
          {
            path: 'about',
            name: 'About',
            component: load('About'),
          },
        ]
      },
      {
        path: '',
        component: load('layout/Layout'),
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: load('Dashboard'),
          },
        ]
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