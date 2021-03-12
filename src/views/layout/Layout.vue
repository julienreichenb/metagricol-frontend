<template>
  <div>
    <Navbar />
    <Sidebar :isOpen="isOpen" @switch="switchOpen" />
    <div class="wrap" :class="isOpen ? 'open' : ''">
      <router-view class="content" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  computed: {
    ...mapGetters('sidebar', ['isOpen']),
  },
  methods: {
    ...mapMutations('sidebar', ['switchOpen']),
  },
}
</script>

<style lang="scss">
.wrap {
  transition: $default-transition;
  margin-left: $sidebar-width-closed;

  &.open {
    margin-left: $sidebar-width-open;
  }
}
</style>