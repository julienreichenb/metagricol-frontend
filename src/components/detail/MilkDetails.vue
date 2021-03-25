<template>
    <b-col md="12" :lg="hasCattle ? 6 : 12">
       <section-title :titleKey="tKey + 'milks'" />
            <apexchart v-if="milkDetailChart.series.length"
                type="pie" width="99%" 
                :series="milkDetailChart.series" 
                :options="milkDetailChart.options"
            />   
    </b-col>
</template>

<script>
import MilkMixin from '@/mixins/milk'
export default {
    mixins: [MilkMixin],
    props: {
        milkDetail: { type: Array, required: true },
        hasCattle: { type: Boolean, default: false },
    },
    data() {
        return {
            tKey: 'detail.milk.',
        }
    },
    mounted() {
        this.setMilkDetailChart(this.milkDetail)
    },
}
</script>

<style>

</style>