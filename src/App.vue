<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import UtilsMixin from '@/mixins/utils'
export default {
  name: 'App',
  mixins: [UtilsMixin],
  async created() {
    await this.getAllUtils()
  },
  metaInfo() {
    return { 
      title: this.$t('meta.' + this.$route.name ),
      titleTemplate: (title) => {
        const suffix = this.$t('meta.suffix')
        return title ? `${title} | ${suffix}` : suffix
      }
    }
  },
}
</script>


<style lang="scss">
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
