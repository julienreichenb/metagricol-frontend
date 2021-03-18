export default {
    data() {
        return {
            cultures: []
        }
    },
    methods: {
        async getCultures() {
            await this.axios.get('cultures')
                .then((res) => {
                    this.cultures = []
                    res.data.map((c) => {
                        console.log(c)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getCulture(id) {
            await this.axios.get(`culture/${id}`)
                .then((res) => {
                    this.cultures = []
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    }
}