import Vue from 'vue'
import Vuex from 'vuex'
import ForfaitStore from './modules/forfait'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    forfaits: {
      ...ForfaitStore,
      namespaced: true,
    },
  },
})
