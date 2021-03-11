<template>
  <div>
      <b-button v-for="l in supportedLocales" :key="l" @click="switchLocale(l)">
          {{l}}
      </b-button>
  </div>
</template>

<script>
import { Trans } from '@/plugins/i18n/translationHandler'
export default {
    name: 'LangSwitcher',
    computed: {
        supportedLocales() {
            return Trans.supportedLocales
        },
    },
    methods: {
        switchLocale(locale) {
            if (this.$i18n.locale !== locale) {
                const to = this.$router.resolve({ params: { locale } })
                return Trans.changeLocale(locale).then(() => {
                    this.$router.push(to.location)
                })
            }
        }
    }
}
</script>

<style>

</style>