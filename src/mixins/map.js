import { latLng } from "leaflet"
export default {
    data() {
        return {
            exploitationsgis: []
        }
    },
    methods: {
        async getAllGis() {
            await this.axios.get('gis')
                .then((res) => {
                    this.exploitationsgis = []
                    res.data.map((e) => {
                        this.exploitationsgis.push(
                            {
                                id: e.idexploitation,
                                latLong: latLng(e.lat, e.long),
                                address: e.address,
                                exploitant: e.exploitation.exploitant.fullname,
                                noct: e.exploitation.noctexploitation,
                            }
                        )
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getGis(id) {
            await this.axios.get(`gis/${id}`)
                .then((res) => {
                    this.exploitationsgis = []
                    this.exploitationsgis.push(
                        {
                            id: res.data.idexploitation,
                            latLong: latLng(res.data.lat, res.data.long),
                            address: res.data.address,
                            exploitant: res.data.exploitation.exploitant.fullname,
                            noct: res.data.exploitation.noctexploitation,
                        }
                    )
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    }
}