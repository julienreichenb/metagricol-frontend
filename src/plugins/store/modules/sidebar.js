export const state = {
    isOpen: {
        sidebar: true,
        exploitation: false,
    },
}

export const mutations = {
    switchOpenSidebar(state) {        
        state.isOpen.sidebar = !state.isOpen.sidebar
    },
    switchOpenExploitant(state) {        
        state.isOpen.exploitation = !state.isOpen.exploitation
    },
}

export const actions = {}

export const getters = {
    isOpen: (state) => {
        return state.isOpen
    },
}
  