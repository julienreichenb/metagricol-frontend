<template>
    <div id="detail-parcels">
        <section-title :titleKey="tKey + 'parcels'" :afterTxt="'(' + parcels.length + ')'" />
        <div class="accordion" role="tablist">
            <b-card v-for="p in parcels" 
                :key="p.idparcel" 
                class="mb-1"
                no-body
            >
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle="'parcel-' + p.idparcel" variant="info">
                        {{ $t(tKey + 'parcel') }} N°{{ p.idparcel }}
                    </b-button>
                </b-card-header>
                <b-collapse :id="'parcel-' + p.idparcel" 
                    accordion="parcels-accordion" 
                    role="tabpanel"
                >
                    <b-card-body>
                        <b-card-text class="text-left">
                            <b-row v-if="p.owner">
                                <b-col sm="12">
                                    <h4 v-html="$t(tKey + 'owner')" />
                                </b-col>
                                <b-col sm="12">
                                    <span v-html="p.owner.nameone" /> <span v-html="p.owner.nametwo" />
                                </b-col>
                            </b-row>
                            <b-row>                          
                                <b-col sm="12">
                                    <h4 v-html="$t(tKey + 'culture')" />
                                </b-col>
                                <b-col v-if="p.culture_type" sm="6" lg="3">
                                    <span class="font-weight-bold" v-html="$t(tKey + 'culturetype')" />
                                </b-col>
                                <b-col v-if="p.culture_type" sm="6" lg="3">
                                    <span v-html="p.culture_type.culturetypename" />
                                </b-col>
                                <b-col v-if="p.culture_mode" sm="6" lg="3">
                                    <span class="font-weight-bold" v-html="$t(tKey + 'culturemode')" />
                                </b-col>
                                <b-col v-if="p.culture_mode" sm="6" lg="3">
                                    <span v-html="p.culture_mode.culturemodecode" />
                                </b-col>
                                <b-col v-if="p.culture_specie" sm="6" lg="3">
                                    <span class="font-weight-bold" v-html="$t(tKey + 'culturespecie')" />
                                </b-col>
                                <b-col v-if="p.culture_specie" sm="6" lg="3">
                                    <span v-html="p.culture_specie.culturespeciename" />
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col sm="12">
                                    <h4 v-html="$t(tKey + 'other')" />
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <span class="font-weight-bold" v-html="$t(tKey + 'constructible')" />
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <font-awesome-icon 
                                        :icon="p.constructible ? 'check-circle' : 'times-circle'" 
                                        :color="p.constructible ? 'green' : 'red'"
                                    />
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <span class="font-weight-bold" v-html="$t(tKey + 'slope')" />
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <span v-html="p.slope + '%'" />
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <span class="font-weight-bold" v-html="$t(tKey + 'surfacetotal')" />
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <span v-html="p.surfacetotal.toLocaleString('fr-ch')" />
                                    <span>m<sup>2</sup></span>
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <span class="font-weight-bold" v-html="$t(tKey + 'surfaceexploited')" />
                                </b-col>
                                <b-col sm="6" lg="3">
                                    <span v-html="p.surfaceexploited.toLocaleString('fr-ch')" />
                                    <span>m<sup>2</sup></span>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        parcels: { type: Array, required: true },
    },
    data() {
        return {
            tKey: 'detail.parcel.',
        }
    },
}
</script>

<style lang="scss">
#detail-parcels {
    h4 {
        margin-top: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid theme-color-level('secondary', -5);
    }
}

</style>