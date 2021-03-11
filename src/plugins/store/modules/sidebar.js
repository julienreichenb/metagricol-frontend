export const state = {
    isOpen: true,
}

export const mutations = {
    switchOpen(state) {        
        state.isOpen = !state.isOpen
    }
}

export const actions = {}

export const getters = {
    isOpen: (state) => {
        return state.isOpen
    },
}
  