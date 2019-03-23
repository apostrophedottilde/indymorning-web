import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderNavBar from './components/HeaderNavbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faCoffee);
library.add(faComment);

const VueCookie = require('vue-cookie');


Vue.use(VueCookie);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('header-navbar', HeaderNavBar);

Vue.config.productionTip = false;

new Vue({
  router,
  components: {
    App,
  },
  render: h => h(App),
}).$mount('#app')
