<template>
    <div id="summary">
        <page-title :titleKey="tKey + 'title'" />
        <section-title :titleKey="tKey + 'cattle.title'" />
        <b-row no-gutters>
            <b-col lg="12" xl="6" class="pt-4">
                <b-row no-gutters v-if="cattleKeyNumbers.length" class="cattle-entry">
                    <b-col lg="6" xl="12" 
                        v-for="(n, index) in cattleKeyNumbers" 
                        :key="n.key"
                    >
                        <b-row class="py-2 text-left" 
                            :class="index !== 0 && 'border-top'"
                            no-gutters
                            @click="selectUgb(n)"
                        >
                            <b-col sm="2">
                                <font-awesome-icon class="fa-3x"
                                    :icon="n.icon.icon" 
                                    :color="n.icon.color" 
                                />
                            </b-col>
                            <b-col sm="2">
                                <p><b>{{ $t(tKey + 'cattle.count') }}</b></p>
                                <p>{{ n.count }}</p>                       
                            </b-col>
                            <b-col sm="2">
                                <p><b>{{ $t(tKey + 'cattle.sum') }}</b></p>
                                <p>{{ n.sum }}</p>    
                            </b-col>
                            <b-col sm="3">
                                <p><b>{{ $t(tKey + 'cattle.avg') }}</b></p>
                                <p>{{ n.avg }}</p>    
                            </b-col>
                            <b-col sm="3">
                                <p><b>{{ $t(tKey + 'cattle.max') }}</b></p>
                                <p>{{ n.max }}</p>    
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="12" xl="6">
                <apexchart v-if="cattleChart.series.length" type="treemap" 
                    height="500" width="100%"
                    :series="cattleChart.series" 
                    :options="cattleChart.options" 
                />
            </b-col>
        </b-row>
        <section-title :titleKey="tKey + 'milk.title'" />
        <b-row v-if="companies.length" no-gutters>
            <b-col lg="12" xl="6">
                <b-table id="companies-table"
                    class="text-left"
                    striped hover
                    :items="companies"
                    :fields="companiesFields"
                    :per-page="perPage"
                    :current-page="currentPage"
                    @row-clicked="selectCompany"
                />
                <b-pagination
                    v-model="currentPage"
                    :total-rows="companiesRows"
                    :per-page="perPage"
                    aria-controls="companies-table"
                />
            </b-col>
            <b-col class="text-center">
                <apexchart v-if="milkChart.find((m) => m.id === 'summary').series.length"
                    type="pie" width="99%" 
                    :series="milkChart.find((c) => c.id === 'summary').series" 
                    :options="milkChart.find((c) => c.id === 'summary').options"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ExploitationMixin from '@/mixins/exploitation'
import CattleMixin from '@/mixins/cattle'
import CultureMixin from '@/mixins/culture'
import MilkMixin from '@/mixins/milk'
export default {
    name: 'Summary',
    mixins: [
        ExploitationMixin,
        CattleMixin,
        CultureMixin,
        MilkMixin,
    ],
    data() {
        return {
            tKey: 'dashboard.summary.',
            perPage: 10,
            currentPage: 1,
        }
    },
    computed: {
        companiesRows() {
            return this.companies.length
        },
        companiesFields() {
            return [
                {
                    key: 'companyname',
                    label: this.$t(this.tKey + 'milk.company'),
                    sortable: true,
                },
                {
                    key: 'location',
                    label: this.$t(this.tKey + 'milk.location'),
                    sortable: true,
                },
                {
                    key: 'totalmilksell',
                    label: this.$t(this.tKey + 'milk.total'),
                    sortable: true,
                    formatter: (val) => {
                        return val.toLocaleString('fr-ch')
                    }
                },
            ]
        },
    },
    watch: {
        cattles(val) {
            if(val.length) {
                this.setCattleKeyNumbers()
                this.setCattleChart()
            }
        },
        companies(val) {
            if(val.length)
                this.setMilkChart('summary')
        },
    },
    mounted() {
        if(this.cattles.length) {
            this.setCattleKeyNumbers()
            this.setCattleChart()
        }
        if(this.companies.length)
            this.setMilkChart('summary')
    },
    methods: {
        selectCompany(company) {    
            this.selectExploitations(this.exploitations.filter((e) => {
                return e.milksells.some((m) => m.company.idcompany === company.idcompany)
            }))
            this.$scrollTop()
        },
        selectUgb(cattlecategory) {
            this.selectExploitations(this.exploitations.filter((e) => {
                return e.ugbs.some((m) => m.category.idcattlecategory === cattlecategory.id)
            }))
            this.$scrollTop()
        },
    },
}
</script>

<style lang="scss">
.cattle-entry {
    :hover {
        background-color: theme-color('light');
    }
    p {
        margin: 0;
    }
}
</style>