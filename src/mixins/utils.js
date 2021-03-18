import { mapActions } from 'vuex'
export default {
    methods: {
        async getAllUtils() {
            this.getCattleCategories()
            this.getCattleTypes()
            this.getCultureTypes()
            this.getCultureSpecies()
            this.getCultureModes()
            this.getAreaTypes()
        },
        async getCattleCategories() {
            await this.axios.get('cattlecategories')
                .then((res) => {
                    this.setCattleCategories(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getCattleTypes() {
            await this.axios.get('cattletypes')
                .then((res) => {
                    this.setCattleTypes(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getCultureTypes() {
            await this.axios.get('culturetypes')
                .then((res) => {
                    this.setCultureTypes(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getCultureSpecies() {
            await this.axios.get('culturespecies')
                .then((res) => {
                    this.setCultureSpecies(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getCultureModes() {
            await this.axios.get('culturemodes')
                .then((res) => {
                    this.setCultureModes(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getAreaTypes() {
            await this.axios.get('areatypes')
                .then((res) => {
                    this.setAreaTypes(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        ...mapActions('utils', [
            'setCattleCategories',
            'setCattleTypes',
            'setCultureTypes',
            'setCultureSpecies',
            'setCultureModes',
            'setAreaTypes'
        ])
    }
}