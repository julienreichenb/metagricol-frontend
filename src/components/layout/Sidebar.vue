<template>
  <div id="sidebar" :class="isOpen ? ' open' : ''">
      <div id="sidebar-header">
            <b-row class="neon text-dark mb-3" no-gutters>
                <b-col sm="8" v-if="openText">
                    <h6>
                        Menu
                    </h6>
                </b-col>
                <b-col class="text-center">
                    <b-link class="text-dark" @click="$emit('switch')">
                        <font-awesome-icon v-if="isOpen" class="lead" :icon="['far', 'arrow-from-right']" />
                        <font-awesome-icon v-else class="lead" :icon="['far', 'arrow-from-left']" />
                    </b-link>
                </b-col>
            </b-row>
            <b-link :to="$i18nRoute({ name: 'Home'})">
                <b-row class="py-2" no-gutters>
                    <b-col class="my-auto text-center">
                        ICON
                    </b-col>
                    <b-col v-if="openText" sm="9" class="model-text">
                        MENU ITEM
                    </b-col>
                </b-row>
            </b-link>
      </div>
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
            tKey: 'menu.sidebar.',
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
@import '@/assets/style/main.scss';
#sidebar {
    position: fixed;
    left: 0;
    top: $navbar-height;
    bottom: 0;
    z-index: $z-sidebar;
    padding: .5em .7em;
    overflow-y: auto;
    overflow-x: hidden;    
    height: 100%;
    width: $sidebar-width-closed;
    background-color: theme-color("light");        
    transition: $default-transition;

    a {
        text-decoration: none;
    }

    &.open {
        width: $sidebar-width-open;
        padding: .5em 7px .5em .7em;
    }

    p {
        margin: 0;
        line-height: 20px;
    }
}
</style>