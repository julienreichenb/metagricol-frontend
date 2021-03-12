<template>
    <div class="p-3 mb-4 rounded text-light bg-dark">
        <h1 v-html="$t(titleKey).toUpperCase()" />
        <h3 v-if="subtitleKey" v-html="subtitle" />
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        titleKey: { type: String, required: true },
        subtitleKey: { type: String, default: null },
    }
}
</script>

<style scoped>
h1 {
    margin: 0;
}
</style>