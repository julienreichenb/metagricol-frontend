<template>
    <div>
        <page-title titleKey="dashboard.summary" subtitleKey="dashboard.table.title" />
        <b-table id="summary-table" 
            class="text-left" 
            :items="exploitations"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            @row-clicked="goToDetail"                    
            striped
            hover
        />
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="summary-table"
        />
    </div>
</template>

<script>
import ExploitationMixin from '@/mixins/exploitation'
export default {
    name: 'Summary',
    mixins: [ExploitationMixin],
    data() {
        return {
            perPage: 8,
            currentPage: 1,
            fields: [
                {
                    key: 'noctexploitation',
                    label: 'No CT Exploitation',
                    sortable: false,
                },
                {
                    key: 'exploitant.fullname',
                    label: 'Exploitant',
                    sortable: true,
                },
                {
                    key: 'totalugb',
                    label: 'UGB',
                    sortable: true,
                    formatter: (val) => {
                        return val.toLocaleString('fr-ch')
                    },
                },
                {
                    key: 'totalmilk',
                    label: 'Kgs de lait',
                    sortable: true,
                    formatter: (val) => {
                        return val.toLocaleString('fr-ch')
                    },
                },
            ],
        }
    },
    mounted() {
        this.getSummary()
    },
    methods: {
        goToDetail(item) {
            this.$i18nRoute({ 
                name: 'ExploitationDetail', 
                params: { idexploitation: item.idexploitation } 
            })
        },
    }
}
</script>

<style>

</style>