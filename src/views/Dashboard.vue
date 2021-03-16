<template>
  <div>
    <page-title :titleKey="'dashboard.title'" />
    <LeafletMap :selected="selected" />
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
    data() {
      return {
        selected: null,
      }
    },
}
</script>

<style>

</style>