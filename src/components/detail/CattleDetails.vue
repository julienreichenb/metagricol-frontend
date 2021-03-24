<template>
  <div>
      {{ cattle.length }}
  </div>
</template>

<script>
export default {
    props: {
        cattle: { type: Array, required: true },
    },
}
</script>

<style>

</style>