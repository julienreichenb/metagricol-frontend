import Vue from "vue"
import App from "./App.vue"
import VueMeta from 'vue-meta'
import router from "./plugins/router"
import store from "./plugins/store"
import { i18n } from './plugins/i18n'
import { Trans } from './plugins/i18n/translationHandler'
import './plugins/bootstrap-vue'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'

library.add(fas)
library.add(fab)
library.add(far)
library.add(fad)
library.add(fal)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app")
