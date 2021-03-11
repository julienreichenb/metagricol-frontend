import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '../store'
import fr from './locales/fr.json'

Vue.use(VueI18n)

const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
locales.keys().forEach((key) => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i)
  if (matched && matched.length > 1) {
    const locale = matched[1]
    store.dispatch('lang/addLocale', { locale })
  }
})

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'fr',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr',
  messages: { fr }
})