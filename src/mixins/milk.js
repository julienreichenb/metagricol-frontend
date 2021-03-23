import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            milkChart: 
            [
                {
                    id: 'summary',
                    series: [],
                    options: null,
                },
            ],
        }
    },
    computed: {
        ...mapGetters('utils', ['cattleCategories', 'cattleTypes', 'cultureTypes', 'cultureSpecies', 'cultureModes', 'areaTypes']),
        ...mapGetters('milk', ['milks', 'companies']),
    },
    methods: {
        async getCompanies() {
            await this.axios.get('companies')
            .then((res) => {
                const temp = []
                res.data.map((d) => {
                    temp.push(d)
                })
                this.setCompanies(temp)
            })
            .catch((err) => {
                this.companies = []
                console.log(err)
            })
        },
        async getCompany(id) {
            await this.axios.get(`company/${id}`)
                .then((res) => {
                    this.companies = []
                    this.companies.push(res.data)
                })
                .catch((err) => {
                    this.companies = []
                    console.log(err)
                })
        },
        async getMilks() {
            await this.axios.get('milks')
                .then((res) => {
                    const temp = []
                    res.data.map((d) => {
                        temp.push(d)
                    })
                    this.setMilks(temp)
                })
                .catch((err) => {
                    this.milksells = []
                    console.log(err)
                })
        },
        async getMilk(id) {
            await this.axios.get(`milk/${id}`)
                .then((res) => {
                    this.milksells = []
                    this.milksells.push(res.data)
                })
                .catch((err) => {
                    this.milksells = []
                    console.log(err)
                })
        },
        setMilkChart(id) {
            const chart = this.milkChart.find((m) => m.id === id)
            const temp = this.$groupBy(this.companies, 'location')
            const sortedTemp = [...new Set(this.companies.map(c => c.location))].map((c) => {
                return {
                    location: c,
                    totalmilksell: temp[c].reduce((sum, val) => sum + val.totalmilksell, 0)
                }
            }).sort((a, b) => b.totalmilksell - a.totalmilksell)
            chart.series = sortedTemp.map((s) => s.totalmilksell)
            chart.options = {
                title: {
                    text: this.$t('dashboard.summary.milk.byLocations'),
                    align: 'center',
                },
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: false,
                },
                labels: sortedTemp.map((s) => s.location),
            }
        },
        ...mapActions('milk', ['setMilks', 'setCompanies']),
    }
}