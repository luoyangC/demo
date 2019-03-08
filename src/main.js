import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
