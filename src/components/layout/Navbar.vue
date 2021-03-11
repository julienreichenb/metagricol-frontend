<template>
  <b-navbar id="navbar" :class="isOpen ? ' open' : ''"  sticky>
        <b-navbar-brand :to="$i18nRoute({ name: 'Home' })" class="mr-4">            
            Metagricol
        </b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item :to="$i18nRoute({ name: 'Home'} )">
               Home
            </b-nav-item>     
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto mr-3">
            <LangSwitcher />
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import LangSwitcher from '@/components/utils/LangSwitcher'
export default {
    components: {
        LangSwitcher,
    },
    props: {
        isOpen: { type: Boolean, default: false },
    },
    data() {
        return {
            tKey: 'menu.navbar.',
        }
    },
}
</script>

<style>

</style>