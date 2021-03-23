export const state = {
    milks: [],
    companies: [],
}

export const mutations = {
    set_milks(state, milks) {   
        state.milks = milks
    },
    set_companies(state, companies) {   
        state.companies = companies
    },
}

export const actions = {
    setMilks({ commit }, milks) {
        commit('set_milks', milks)
    },
    setCompanies({ commit }, companies) {
        commit('set_companies', companies)
    },
}

export const getters = {
    milks: (state) => {
        return state.milks
    },
    companies: (state) => {
        return state.companies
    },
}