<template>
    <b-col md="12" :lg="hasMilk ? 6 : 12">
        <section-title :titleKey="tKey + 'cattles'" />
        <apexchart v-if="cattleDetailChart.series.length" type="treemap" 
            height="500" width="100%"
            :series="cattleDetailChart.series" 
            :options="cattleDetailChart.options" 
        />
    </b-col>
</template>

<script>
import CattleMixin from '@/mixins/cattle'
export default {
    mixins: [CattleMixin],
    props: {
        cattleDetail: { type: Array, required: true },
        hasMilk: { type: Boolean, default: false },
    },
    data() {
        return {
            tKey: 'detail.cattle.'
        }
    },
    mounted() {
        this.setCattleDetailChart(this.cattleDetail)
    },
}
</script>

<style>

</style>