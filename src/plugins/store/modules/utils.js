export const state = {
    cattleCategories: [],
    cattleTypes: [],
    cultureTypes: [],
    cultureSpecies: [],
    cultureModes: [],
    areaTypes: [],
}

export const mutations = {
    set_cattle_categories(state, cattleCategories) {
        state.cattleCategories = cattleCategories
    },
    set_cattle_types(state, cattleTypes) {
        state.cattleTypes = cattleTypes
    },
    set_culture_types(state, cultureTypes) {
        state.cultureTypes = cultureTypes
    },
    set_culture_species(state, cultureSpecies) {
        state.cultureSpecies = cultureSpecies
    },
    set_culture_modes(state, cultureModes) {
        state.cultureModes = cultureModes
    },
    set_area_types(state, areaTypes) {
        state.areaTypes = areaTypes
    },
}

export const actions = {
    setCattleCategories({ commit }, cattleCategories) {
        commit('set_cattle_categories', cattleCategories)
    },
    setCattleTypes({ commit }, cattleCategories) {
        commit('set_cattle_types', cattleCategories)
    },
    setCultureTypes({ commit }, cattleCategories) {
        commit('set_culture_types', cattleCategories)
    },
    setCultureSpecies({ commit }, cattleCategories) {
        commit('set_culture_species', cattleCategories)
    },
    setCultureModes({ commit }, cattleCategories) {
        commit('set_culture_modes', cattleCategories)
    },
    setAreaTypes({ commit }, cattleCategories) {
        commit('set_area_types', cattleCategories)
    },
}

export const getters = {
    cattleCategories: (state) => {
        return state.cattleCategories
    },
    cattleTypes: (state) => {
        return state.cattleTypes
    },
    cultureTypes: (state) => {
        return state.cultureTypes
    },
    cultureSpecies: (state) => {
        return state.cultureSpecies
    },
    cultureModes: (state) => {
        return state.cultureModes
    },
    areaTypes: (state) => {
        return state.areaTypes
    },
}
  