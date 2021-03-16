<template>
    <div class="page-title p-3 mt-4 text-light bg-dark">
        <b-row class="align-items-center" no-gutters>
            <b-col sm="1" class="page-title-point" />
            <b-col>
                <h1 v-html="$t(titleKey).toUpperCase()" />
                <h5 class="mt-2 font-italic" v-if="subtitleKey" v-html="$t(subtitleKey)" />
            </b-col>
            <b-col sm="1" class="page-title-point" />
        </b-row>
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

<style lang="scss" scoped>
h1 {
    margin: 0;
}
.page-title {
    border-radius: 5px 5px 0 0;

    .page-title-point::before {
        font-size: 2em;
        font-weight: bolder;
        content: '·';
    }
}
</style>