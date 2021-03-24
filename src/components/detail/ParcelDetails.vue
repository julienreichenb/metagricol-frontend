<template>
  <div>
      {{ parcels.length }}
  </div>
</template>

<script>
export default {
    props: {
        parcels: { type: Array, required: true },
    },
}
</script>

<style>

</style>