<template>
  <div>
      {{ milk.length }}
  </div>
</template>

<script>
export default {
    props: {
        milk: { type: Array, required: true },
    },
}
</script>

<style>

</style>