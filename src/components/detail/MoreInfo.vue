<template>
  <b-row class="my-2 mx-5 text-left" no-gutters>
        <b-col sm="6" lg="2">
            <span class="font-weight-bold" v-html="$t(tKey + 'area')"/>
        </b-col>
        <b-col sm="6" lg="4">
            <span v-html="exploitation.area_type.areatypename" />
        </b-col>
        <b-col sm="6" lg="2">
            <span class="font-weight-bold" v-html="$t(tKey + 'type')"/>
        </b-col>
        <b-col sm="6" lg="4">
            <span v-html="exploitation.exploitation_type.exploitationtypename" />
        </b-col>
        <b-col sm="6" lg="2">
            <span class="font-weight-bold" v-html="$t(tKey + 'legal')"/>
        </b-col>
        <b-col sm="6" lg="4">
            <span v-html="exploitation.legal_form_type.legalformtypename" />
        </b-col>
        <b-col sm="6" lg="2">
            <span class="font-weight-bold" v-html="$t(tKey + 'surface')"/>
        </b-col>
        <b-col sm="6" lg="4">
            <span v-html="exploitation.parcels.reduce((sum, val) => sum + val.surfacetotal, 0).toLocaleString('fr-ch')" />
            <span>m<sup>2</sup></span>
        </b-col>
  </b-row>
</template>

<script>
export default {
    props: {
        exploitation: { type: Object, required: true },
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