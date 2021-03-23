<template>
  <div id="dashboard">
    <page-title :titleKey="'dashboard.map.title'" />
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
        this.getCompany(id)
        this.getCattle(id)
      } else {
        this.getCompanies()
        this.getCattles()
      }
    },
  },
}
</script>

<style lang="scss">
#dashboard {
  min-height: 270vh;
}
</style>