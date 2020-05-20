import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import ChartKick from 'vue-chartkick'
import Chart from 'chart.js'
import router from './router'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.use(ChartKick.use(Chart))

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
