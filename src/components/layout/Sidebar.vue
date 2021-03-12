<template>
    <div id="sidebar" :class="isOpen ? ' open' : ''" class="bg-dark text-white">
        <div class="mb-3" :class="isOpen ? 'text-right mr-3' : 'text-center'">
            <b-link @click="$emit('switch')">
                <font-awesome-icon class="lead" :icon="isOpen ? ['far', 'arrow-from-right'] : ['far', 'arrow-from-left']" />
            </b-link>
        </div>
        <b-link :to="$i18nRoute({ name: 'Home'})">
            <b-row class="py-2" no-gutters>
                <b-col class="my-auto text-center">
                    ICON
                </b-col>
                <b-col v-if="openText" sm="9">
                    MENU ITEM
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
        }
    },
    watch: {
        isOpen: function (val) {
            setTimeout(() => {
                this.openText = val
            }, val ? 280 : 0)
        },
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
    padding: .5em .7em;
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
        padding: .5em 7px .5em .7em;
    }
}
</style>