import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            milksells: [],
            milkChart: {
                series: [],
                options: null,
            },
        }
    },
    computed: {
        ...mapGetters('utils', ['cattleCategories', 'cattleTypes', 'cultureTypes', 'cultureSpecies', 'cultureModes', 'areaTypes'])
    },
    methods: {
        async getMilks() {
            await this.axios.get('milks')
                .then((res) => {
                    this.milksells = res.data
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
        setMilkChart() {
        },
    }
}