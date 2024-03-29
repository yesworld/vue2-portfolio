import Vue from 'vue'
import './plugins/vuetify'
import './plugins/scroll'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App) // tslint:disable-line
}).$mount('#app')
