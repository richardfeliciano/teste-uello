import axios from '@/services/http.service.js'

export function fetchDelivery({ commit }) {
  axios
    .get('/deliveries/1')
    .then(({ data }) => commit('SET_DELIVERY', data))
    .finally(() => commit('SET_LOADER', false))
}
