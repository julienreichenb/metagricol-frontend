import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            cattleChart: {
                series: [],
                options: {},
            },
            cattleKeyNumbers: [],
            cattleDetailChart: {
                series: [],
                options: {},
            },
        }
    },
    computed: {
        ...mapGetters('utils', ['cattleCategories', 'cattleTypes', 'cultureTypes', 'cultureSpecies', 'cultureModes', 'areaTypes']),
        ...mapGetters('cattle', ['cattles']),
    },
    methods: {
        async getCattles() {
            await this.axios.get('cattles')
                .then((res) => {
                    const temp = []
                    res.data.map((d) => {
                        temp.push(d)
                    })
                    this.setCattles(temp)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        setCattleKeyNumbers() {
            this.cattleKeyNumbers = []
            this.cattleCategories.map((c) => {
                const cattleSet = this.cattles.filter((x) => x.category.idcattlecategory === c.idcattlecategory && x.ugb > 0)
                this.cattleKeyNumbers.push({
                    key: c.cattlecategoryname,
                    id: c.idcattlecategory,
                    count: cattleSet.length,
                    avg: (cattleSet.reduce((prev, cur) => prev + cur.ugb, 0) / cattleSet.length).toFixed(2),
                    max: Math.max.apply(Math, cattleSet.map((o) => o.ugb)).toFixed(2),
                    sum: cattleSet.reduce((prev, cur) => prev + cur.ugb, 0).toFixed(2),
                    icon: this.setCattleIcon(c.idcattlecategory),
                })
            })
        },
        setCattleChart() {
            this.cattleChart.series.push({ data: [] })
            this.cattleChart.options = {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                tooltip: {
                    y: {
                        formatter: (val) => {
                            return val + ' UGBs'
                        },
                    },
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
        },
        setCattleDetailChart(cattles) {
            this.cattleDetailChart.series.push({ data: [] })
            this.cattleDetailChart.options = {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                tooltip: {
                    y: {
                        formatter: (val) => {
                            return val + ' UGBs'
                        },
                    },
                },
                plotOptions: {
                    treemap: {
                        enableShades: false,
                        distributed: true,
                    },
                },
            }
            this.cattleCategories.map((c) => {
                const total = cattles
                    .filter((x) => x.category.idcattlecategory === c.idcattlecategory)
                    .reduce((prev, cur) => prev + cur.ugb, 0)
                this.cattleDetailChart.series[0].data.push({
                    x: this.$t('cattle.category.' + c.cattlecategoryname),
                    y: total.toFixed(2),
                })
            })
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
        },
        ...mapActions('cattle', ['setCattles']),
    },
}