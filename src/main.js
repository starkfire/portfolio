import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

import { Col, Row, Layout, Icon } from 'ant-design-vue'

Vue.use(Col)
Vue.use(Row)
Vue.use(Layout)
Vue.use(Icon)

new Vue({
  created() {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
