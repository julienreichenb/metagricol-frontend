export const state = {
    cattles: [],
}

export const mutations = {
    set_cattles(state, cattles) {   
        state.cattles = cattles
    },
}

export const actions = {
    setCattles({ commit }, cattles) {
        commit('set_cattles', cattles)
    },
}

export const getters = {
    cattles: (state) => {
        return state.cattles
    },
}