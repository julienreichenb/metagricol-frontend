import { latLng } from "leaflet"
export default {
    data() {
        return {
            exploitations: []
        }
    },
    methods: {
        async getExploitations() {
            await this.axios.get('gis')
                .then((res) => {
                    this.exploitations = []
                    res.data.map((e) => {
                        this.exploitations.push(
                            {
                                id: e.idexploitation,
                                latLong: latLng(e.lat, e.long),
                                address: e.address,
                                exploitant: e.exploitation.exploitant.fullname                                
                            }
                        )
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getExploitation(id) {
            await this.axios.get(`gis/${id}`)
                .then((res) => {
                    this.exploitations = []
                    this.exploitations.push(
                        {
                            id: res.data.idexploitation,
                            latLong: latLng(res.data.lat, res.data.long),
                            address: res.data.address,
                            exploitant: res.data.exploitation.exploitant.fullname                                
                        }
                    )
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    }
}