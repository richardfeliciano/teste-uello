import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import './config/autoload.js'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faCar,
  faInbox,
  faClock,
  faCheck,
  faMapMarkerAlt,
  faQuestionCircle,
  faChevronDown,
  faHistory,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCar)
library.add(faClock)
library.add(faInbox)
library.add(faCheck)
library.add(faQuestionCircle)
library.add(faChevronDown)
library.add(faHistory)
library.add(faMapMarkerAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
