 /* eslint-disable */
import Vue from 'vue'

// components
import App from './App.vue'

// router
import routes from './router';
const router = new VueRouter({
  routes
})

// plugins
import './plugins/element.js'

Vue.config.productionTip = false

// build app
new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount('#app')