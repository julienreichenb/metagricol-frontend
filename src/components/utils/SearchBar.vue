<template>
    <b-input-group>
        <b-form-input type="text" :placeholder="$t(tKey + placeholderKey)" v-model="query" v-on:keyup.enter="$emit('search', query)" />
        <b-input-group-append>
            <b-button :variant="variant" @click="$emit('search', query)">
                <font-awesome-icon icon="search" class="mr-1" />
                {{ $t(tKey + searchKey) }}
            </b-button>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
export default {
    props: {
        variant: { type: String, default: 'primary' },
        placeholderKey: { type: String, default: 'placeholderDefault' },
        searchKey: { type: String, default: 'searchDefault' },
    },
    data() {
        return {
            tKey: 'utils.search.',
            query: null,
        }
    },
}
</script>

<style>

</style>