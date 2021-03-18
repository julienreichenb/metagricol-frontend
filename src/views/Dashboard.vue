<template>
  <div id="dashboard">
    <page-title :titleKey="'dashboard.map'" />
    <LeafletMap />
    <router-view />
  </div>
</template>

<script>
import LeafletMap from '@/components/map/LeafletMap'
export default {
  name: 'Dashboard',
  components: {
    LeafletMap,
  },
}
</script>

<style lang="scss">
#dashboard {
  min-height: 160vh;
}
</style>