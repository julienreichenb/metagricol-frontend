<template>
    <div>
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
                <b-col sm="6" lg="2">
                    <span class="font-weight-bold" v-html="$t(tKey + 'parcels')"/>
                </b-col>
                <b-col sm="6" lg="4">
                    <span v-html="exploitation.parcels.length" />
                </b-col>
        </b-row>
        <div v-if="otherExploitations">
                <h4 v-html="$t(tKey + 'otherExploitations')" />
                <b-table 
                    :items="otherExploitationsFiltered"
                    :fields="otherExploitationsFields"
                    striped
                    hover
                    @row-clicked="goToDetail"
                />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        exploitation: { type: Object, required: true },
        otherExploitations: { type: Array, required: false, default: null },
    },
    data() {
        return {
            tKey: 'detail.',
        }
    },
    computed: {
        otherExploitationsFiltered() {
            return this.otherExploitations.filter((o) => o.idexploitation !== this.exploitation.idexploitation)
        },
        otherExploitationsFields() {
            return [
                {
                    key: 'noctexploitation',
                    label: this.$t(this.tKey + 'tableOther.noct'),
                    sortable: false,
                },
                {
                    key: 'totalmilk',
                    label: this.$t(this.tKey + 'tableOther.milk'),
                    sortable: true,
                },
                {
                    key: 'totalugb',
                    label: this.$t(this.tKey + 'tableOther.ugb'),
                    sortable: true,
                },
            ]
        }
    },
    beforeRouteUpdate(to, from, next) {
        next(to)
    },
    methods: {
        goToDetail(item) {
            this.$router.dispatch(
                this.$i18nRoute({ 
                    name: 'ExploitationDetail', 
                    params: { idexploitation: item.idexploitation },
                })
            )    
        },
    },
}
</script>

<style>

</style>