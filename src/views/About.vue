<template>
  <div>
      <page-title :titleKey="'about.title'" />
      <section v-for="s in sections" :key="s" class="text-left my-2">
        <h2 v-html="$t(tKey + s + '.title')" />
        <p v-html="$t(tKey + s + '.section')" />
      </section>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
      return {
        tKey: 'about.',
        sections: [
          'goals',
          'data',
          'partners'
        ]
      }
    }
}
</script>

<style>

</style>