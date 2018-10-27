import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoginModal: false
  },
  mutations: {
    showLoginModal (state) {
      state.showLoginModal = true
    },
    hideLoginModal (state) {
      state.showLoginModal = false
    }
  },
  actions: {
    showLogin (context) {
      context.commit('showLoginModal')
    },
    hideLoginModal (context) {
      context.commit('hideLoginModal')
    }
  }
})
