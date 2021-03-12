<template>
  <b-navbar id="navbar" :class="isOpen ? ' open' : ''" sticky type="dark" variant="dark">
        <b-navbar-brand :to="$i18nRoute({ name: 'Home' })" class="mr-5">
            <font-awesome-icon v-if="icon" :icon="icon.icon" size="lg" class="mr-2 fa-2x" :color="icon.color" />
            <span id="brand-text" class="small-caps p-2">Metagricol</span>
        </b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item v-for="i in menu" 
                :key="i.key" 
                :to="$i18nRoute({ name: i.route } )" 
                :class="($route.name === i.route && 'active')"
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
            icon: null,
            icons: [
                { icon: ['fad', 'tractor'], color: 'chocolate' },
                { icon: ['fad', 'sheep'], color: 'lightblue' },
                { icon: ['fad', 'pig'], color: 'pink' },
                { icon: ['fad', 'farm'], color: 'firebrick' },
                { icon: ['fad', 'cow'], color: 'lightgrey' },
                { icon: ['fad', 'wheat'], color: 'green' },   
            ],
            menu: [
                {
                    key: 'home',
                    route: 'Home',
                },
                {
                    key: 'dashboard',
                    route: 'Dashboard',
                },
                {
                    key: 'about',
                    route: 'About',
                },
            ]
        }
    },
    mounted() {
        this.icon = this.randomIcon()
    },
    methods: {
        randomIcon() {
            const rand = Math.floor(Math.random() * this.icons.length)
            return this.icons[rand]
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