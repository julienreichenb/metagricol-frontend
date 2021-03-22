<template>
    <div>
        <page-title :titleKey="tKey + 'title'" />
        <b-row no-gutters>
            <b-col lg="12" xl="6" class="pt-4">
                <b-row no-gutters v-if="cattleKeyNumbers.length">
                    <b-col class="cattle-entry"
                        lg="6" xl="12" 
                        v-for="(n, index) in cattleKeyNumbers" 
                        :key="n.key"
                    >
                        <b-row no-gutters class="py-2 text-left" :class="index !== 0 && 'border-top'">
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

    </div>
</template>

<script>
import CattleMixin from '@/mixins/cattle'
import CultureMixin from '@/mixins/culture'
import MilkMixin from '@/mixins/milk'
export default {
    name: 'Summary',
    mixins: [
        CattleMixin,
        CultureMixin,
        MilkMixin,
    ],
    data() {
        return {
            tKey: 'dashboard.summary.',
            testid: 33884,
        }
    },
    watch: {
        cattles(val) {
            console.log(val)
            if(val.length) {
                console.log('Compute Key Numbers & Chart')
                this.setCattleKeyNumbers()
                this.setCattleChart()
            }
        },
    },
    mounted() {
        if(this.cattles.length) {
            this.setCattleKeyNumbers()
            this.setCattleChart()
        }
    }
}
</script>

<style lang="scss">
.cattle-entry {
    p {
        margin: 0;
    }
}
</style>