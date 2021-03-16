export default {
    data() {
        return {
            cattles: []
        }
    },
    methods: {
        async getCattles() {
            await this.axios.get('cattles')
                .then((res) => {
                    this.cattles = []
                    res.data.map((c) => {
                        console.log(c)
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
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    }
}