<template>
  <div>
    <Navbar />
    <Sidebar :isOpen="isOpen.sidebar" @switch="switchOpenSidebar" />
    <div class="wrap" :class="isOpen.sidebar ? 'open' : ''">
      <router-view class="content" />
      <Footer />
    </div>
    <SideExploitation :isOpen="isOpen.exploitation" @switch="switchOpenExploitant" />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import SideExploitation from '@/components/layout/SideExploitation'
import Footer from '@/components/layout/Footer'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    SideExploitation,
    Footer,
  },
  computed: {
    ...mapGetters('sidebar', ['isOpen']),
  },
  methods: {
    ...mapMutations('sidebar', ['switchOpenSidebar', 'switchOpenExploitant']),
  },
}
</script>

<style lang="scss">
.wrap {
  transition: $default-transition;
  margin-left: $sidebar-width-closed;
  margin-right: $sidebar-width-closed;

  &.open {
    margin-left: $sidebar-width-open;
  }
}
</style>