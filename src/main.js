import Vue from "vue"
import App from "./App.vue"
import VueMeta from 'vue-meta'

// Plugins
import router from "./plugins/router"
import store from "./plugins/store"
import { i18n } from './plugins/i18n'
import { Trans } from './plugins/i18n/translationHandler'
import { Utils } from './plugins/global/utils'
import './plugins/bootstrap-vue'
import './plugins/axios'
import './plugins/apexcharts'
import './plugins/leaflet'
import './plugins/fontawesome'

// Global components
import PageTitle from '@/components/utils/PageTitle'
import SectionTitle from '@/components/utils/SectionTitle'
import Loading from '@/components/utils/Loading'
import SearchBar from '@/components/utils/SearchBar'
Vue.component('page-title', PageTitle)
Vue.component('section-title', SectionTitle)
Vue.component('loading', Loading)
Vue.component('search-bar', SearchBar)

// Global bindings
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)
Vue.prototype.$groupBy = Utils.groupBy.bind(Utils)
Vue.prototype.$scrollTop = Utils.scrollToTop.bind(Utils)

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
