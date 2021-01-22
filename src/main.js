import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

import { Col, Row, Layout } from 'ant-design-vue'

Vue.use(Col)
Vue.use(Row)
Vue.use(Layout)

new Vue({
  created() {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
