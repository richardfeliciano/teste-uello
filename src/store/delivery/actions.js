import axios from '@/services/http.service.js'

export function fetchDelivery({ commit }) {
  axios
    .get('/deliveries/1')
    .then((res) => {
      commit('SET_DELIVERY', res.data)
    })
    .finally(() => commit('SET_LOADER', false))
}
