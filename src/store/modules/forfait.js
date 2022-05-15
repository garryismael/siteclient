import ForfaitService from '@/services/forfait'
import httpStatus from 'http-status'

const ForfaitStore = {
  state: {
    forfaits: [],
  },
  getters: {
    loaded (state) {
      return state.forfaits.length > 0
    },
    getForfaits (state) {
      return state.forfaits
    },
  },
  mutations: {
    setForfaits (state, { forfaits }) {
      state.forfaits = forfaits
    },
  },
  actions: {
    async get_forfaits ({ commit }) {
      const response = await ForfaitService.getForfaits()
      if (response.status === httpStatus.OK) {
        commit({
          type: 'setForfaits',
          forfaits: response.data,
        })
      }
    },
  },
}

export default ForfaitStore
