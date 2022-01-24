<template>
  <b-dropdown id="dropdown-lang" variant="outline-light" no-caret>
        <template #button-content>
            <font-awesome-icon class="fa-2x" :icon="['fas', 'globe']" /> {{ $i18n.locale.toUpperCase() }}
        </template>
        <b-dropdown-item v-for="locale in supportedLocales" 
            :key="locale"
            @click="switchLocale(locale)"
        >
            {{ $t(tKey + locale) }}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
import { Trans } from '@/plugins/i18n/translationHandler'
export default {
    name: 'LangSwitcher',
    data() {
        return {
            tKey: 'lang.'
        }
    },
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