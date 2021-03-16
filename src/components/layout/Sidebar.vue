<template>
    <div id="sidebar" :class="isOpen ? ' open' : ''" class="bg-dark text-white">
        <div class="pb-2 d-flex" :class="isOpen ? 'border-bottom border-light justify-content-between' : 'justify-content-around'">
            <span v-if="openText" class="ml-2" v-html="$t(tKey + 'title').toUpperCase()" />
            <b-link @click="$emit('switch')">
                <font-awesome-icon class="lead" :class="openText && ' mr-3'" :icon="isOpen ? ['far', 'arrow-from-right'] : ['far', 'arrow-from-left']" />
            </b-link>
        </div>
        <b-link v-for="m in menu" :key="m.key" :to="$i18nRoute({ name: m.to })">
            <b-row class="sidebar-item mb-1 py-3 px-1 align-items-center" 
                :class="routeName === m.to && 'active'" 
                no-gutters
            >
                <b-col>
                    <font-awesome-icon :icon="m.icon.icon" :color="m.icon.color" class="fa-2x" />
                </b-col>
                <b-col v-if="openText" sm="12" md="9" class="small-caps">
                    <span class="lead" v-html="$t(tKey + m.key)" />
                </b-col>
            </b-row>
        </b-link>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        isOpen: { type: Boolean, default: true },
    },
    data() {
        return {
            tKey: 'sidebar.',
            openText: true,
            menu: [
                {
                    key: 'summary',
                    icon: {
                        icon: 'farm',
                        color: 'firebrick',
                    },
                    to: 'Summary',
                },
                {
                    key: 'cattle',
                    icon: { 
                        icon: ['fad', 'cow'], 
                        color: 'lightgrey'     
                    },
                    to: 'Cattle',
                },
                {
                    key: 'culture',
                    icon: { 
                        icon: ['fad', 'wheat'], 
                        color: 'green' 
                    },
                    to: 'Culture'
                },
                {
                    key: 'milk',
                    icon: {
                        icon: ['fad', 'cheese-swiss'],
                        color: 'yellow',
                    },
                    to: 'Milk',
                }
            ]
        }
    },
    watch: {
        isOpen: function (val) {
            setTimeout(() => {
                this.openText = val
            }, val ? 280 : 0)
        },
    },
    computed: {
        routeName() {
            return this.$route.name
        }
    },
    created() {
        this.openText = this.isOpen
    },
    mounted() {
    },
    methods: {
    },
}
</script>

<style lang="scss">
#sidebar {
    position: fixed;
    left: 0;
    top: $navbar-height - 3;
    bottom: 0;
    z-index: $z-sidebar;
    padding: .5em 0;
    overflow-y: auto;
    overflow-x: hidden;    
    height: 100%;
    width: $sidebar-width-closed;
    transition: $default-transition;

    a {
        text-decoration: none;
        color: white;
    }

    &.open {
        width: $sidebar-width-open;
        padding: .5em 0;
    }
}

.sidebar-item:hover, .sidebar-item.active {
    transition: $default-transition;
    cursor: pointer;
    font-weight: bolder;
    background-color: theme-color-level('dark', -2);
}
</style>