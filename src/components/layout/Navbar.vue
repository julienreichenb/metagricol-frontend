<template>
  <b-navbar id="navbar" :class="isOpen ? ' open' : ''" sticky type="dark" variant="dark">
        <b-navbar-brand :to="$i18nRoute({ name: 'Home' })" class="mr-5">
            <font-awesome-icon :icon="['fad', 'burn']" size="lg" class="mr-2 fa-2x" color="orangered" />
            <span id="brand-text" class="small-caps p-2">Metagricol</span>
        </b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item v-for="i in menu" 
                :key="i.key" 
                :to="$i18nRoute({ name: i.route } )" 
                :class="$route.path.includes(i.key) && 'active'"
                class="mr-3"
            >
               {{ $t(tKey + i.key).toUpperCase() }}
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
    name: 'Navbar',
    components: {
        LangSwitcher,
    },
    props: {
        isOpen: { type: Boolean, default: false },
    },
    data() {
        return {
            tKey: 'menu.',
            menu: [
                {
                    key: 'home',
                    route: 'Home',
                },
                {
                    key: 'dashboard',
                    route: 'Summary',
                },
                {
                    key: 'about',
                    route: 'About',
                },
            ]
        }
    },
}
</script>

<style lang="scss">
#brand-text {
    font-size: 1.3em;
    font-weight: bold;
}
</style>