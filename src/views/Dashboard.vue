<template>
  <div>
      <page-title :titleKey="'dashboard.title'" />
      <LeafletMap />
      <Charts />
  </div>
</template>

<script>
import LeafletMap from '@/components/map/LeafletMap'
import Charts from '@/components/charts/Charts'
export default {
    name: 'About',
    components: {
      LeafletMap,
      Charts, 
    },
}
</script>

<style>

</style>