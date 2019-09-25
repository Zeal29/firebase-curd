import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
// import 'material-icons/css/material-icons.min.css'
import 'material-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
