<template>
  <div id="dashboard">
    <page-title :titleKey="'dashboard.map'" />
    <LeafletMap />
    <router-view />
  </div>
</template>

<script>
import LeafletMap from '@/components/map/LeafletMap'
import CattleMixin from '@/mixins/cattle'
import CultureMixin from '@/mixins/culture'
import MilkMixin from '@/mixins/milk'
export default {
  name: 'Dashboard',
  mixins: [
    CattleMixin,
    CultureMixin,
    MilkMixin,
  ],
  components: {
    LeafletMap,
  },
  created() {
    this.callApis()
  },
  methods: {
    callApis(id) {
      if(id) {
        this.getMilk(id)
        this.getCattle(id)
      } else {
        this.getMilks()
        this.getCattles()
      }
    },
  },
}
</script>

<style lang="scss">
#dashboard {
  min-height: 160vh;
}
</style>