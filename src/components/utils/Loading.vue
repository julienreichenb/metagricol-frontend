<template>
  <div>
    <font-awesome-icon :icon="['fad', 'spinner']" :class="customClass" spin />
    <p class="lead text-muted mt-2" v-html="$t(text)" />
  </div>
</template>

<script>
export default {
    props: {
        customClass: { type: String, required: false, default: '' },
        text: { type: String, required: false },
    },
}
</script>

<style>

</style>