import { createStore } from 'vuex'

export default createStore({
  state: {
    isMobile: null,
    isTablet: null,
    isDesktop: null,
    milestones: [],
    stars: []
  },
  mutations: {
    SET_IS_MOBILE(state, truthiness) {
      state.isMobile = truthiness
    },
    SET_IS_TABLET(state, truthiness) {
      state.isTablet = truthiness
    },
    SET_IS_DESKTOP(state, truthiness) {
      state.isDesktop = truthiness
    },
    SET_VALUE(state, { key, value }) {
      state[key] = value
    }
  },
  actions: {
  },
  modules: {
  }
})
