<template>
    <div class="mt-3">
        <h4 class="border-bottom" v-html="$t(tKey + 'contact')" />
        <div class="lead">
            <b-row v-if="email">
                <b-col sm="1">
                    <font-awesome-icon class="mr-1" :icon="'envelope'" />
                </b-col>
                <b-col>
                    <a :href="'mailto:' + email">{{ email }}</a>
                </b-col>
            </b-row>
            <b-row v-if="phoneprivate">
                <b-col sm="1">
                    <font-awesome-icon class="mr-1" :icon="'phone'" />
                </b-col>
                <b-col>
                    {{ phoneprivate }}
                </b-col>
            </b-row>
            <b-row v-if="phonemobile">
                <b-col sm="1">
                    <font-awesome-icon class="mr-1" :icon="'mobile-alt'" />
                </b-col>
                <b-col>
                    {{ phonemobile }}
                </b-col>
            </b-row>
            <b-row v-if="address">
                <b-col sm="1">
                    <font-awesome-icon class="mr-1" :icon="'map-marker-alt'" />
                </b-col>
                <b-col>
                    {{ address }}
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        email: { type: String, default: null },
        phoneprivate: { type: String, default: null },
        phonemobile: { type: String, default: null },
        address: { type: String, default: null },
    },
    data() {
        return {
            tKey: 'detail.',
        }
    },
}
</script>

<style>

</style>