import Vue from 'vue'
import Vuex from 'vuex'
import delivery from './delivery/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    delivery,
  },
})
