import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            cattles: [],
            cattleChart: {
                ready: false,
                series: [],
                options: {},
            },
            cattleKeyNumbers: [],
        }
    },
    computed: {
        ...mapGetters('utils', ['cattleCategories', 'cattleTypes', 'cultureTypes', 'cultureSpecies', 'cultureModes', 'areaTypes']),
    },
    methods: {
        async getCattles() {
            await this.axios.get('cattles')
                .then((res) => {
                    this.cattles = res.data.map((d) => {
                        return d
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getCattle(id) {
            await this.axios.get(`cattle/${id}`)
                .then((res) => {
                    this.cattles = []
                    this.cattles.push(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        setCattleKeyNumbers() {
            this.cattleCategories.map((c) => {
                const cattleSet = this.cattles.filter((x) => x.category.idcattlecategory === c.idcattlecategory && x.ugb > 0)
                this.cattleKeyNumbers.push({
                    key: c.cattlecategoryname,
                    count: cattleSet.length,
                    avg: (cattleSet.reduce((prev, cur) => prev + cur.ugb, 0) / cattleSet.length).toFixed(2),
                    max: Math.max.apply(Math, cattleSet.map((o) => o.ugb)).toFixed(2),
                    sum: cattleSet.reduce((prev, cur) => prev + cur.ugb, 0).toFixed(2),
                    icon: this.setCattleIcon(c.idcattlecategory),
                })
            })
        },
        setCattleChart() {
            this.cattleChart.ready = false
            this.cattleChart.series.push({ data: [] })
            this.cattleChart.options = {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    treemap: {
                        enableShades: false,
                        distributed: true,
                    },
                },
            }
            this.cattleCategories.map((c) => {
                const total = this.cattles
                    .filter((x) => x.category.idcattlecategory === c.idcattlecategory)
                    .reduce((prev, cur) => prev + cur.ugb, 0)
                this.cattleChart.series[0].data.push({
                    x: this.$t('cattle.category.' + c.cattlecategoryname),
                    y: total.toFixed(2),
                })
            })
            this.cattleChart.ready = true
        },
        setCattleIcon(id) {
            let icon, color
            switch(id) {
                case 1:
                    icon = 'cow'
                    color = 'black'
                    break
                case 2:
                    icon = 'horse'
                    color = 'chocolate'
                    break
                case 3:
                    icon = 'sheep'
                    color = 'skyblue'
                    break
                case 4:
                    icon = 'ram'
                    color = 'grey'
                    break
                case 5:
                    icon = 'duck'
                    color = 'forestgreen'
                    break
                case 6:
                    icon = 'deer'
                    color = 'brown'
                    break
                default:
                    icon = 'pig'
                    color = 'salmon'
                    break
            }
            return {
                icon: ['fad', icon],
                color
            }
        }
    },
}