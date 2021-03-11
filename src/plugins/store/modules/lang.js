export const state = {
    locales: [],
}

export const mutations = {
    add_locale(state, locale) {   
        const locales = state.locales 
        locales.push(locale)
        state.locales = [ ...new Set(locales) ]
    },
}

export const actions = {
    addLocale({ commit }, data) {
        commit('add_locale', data.locale)
    },
}

export const getters = {
    locales: (state) => {
        return state.locales
    },
}