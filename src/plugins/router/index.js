import Vue from "vue"
import VueRouter from "vue-router"
import { Trans } from '../i18n/translationHandler'

Vue.use(VueRouter)

const load = (component, view = true) => {
  if(view)
    return () => import(`@/views/${component}.vue`)
  else
    return () => import(`@/components/${component}.vue`)
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
          {
            path: '/exploitation/:idexploitation',
            name: 'ExploitationDetail',
            component: load('ExploitationDetail'),
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
            children: [
              {
                path: '',
                name: 'Summary',
                component: load('dashboard/Summary', false),
              },
              {
                path: 'cattle',
                name: 'Cattle',
                component: load('dashboard/Cattle', false),
              },
              {
                path: 'milk',
                name: 'Milk',
                component: load('dashboard/Milk', false),
              }
            ],
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
  //mode: 'history',
})

export default router