import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/Split/Split.vue'

import './mock/mockServer' // 只需要引入即可
import './filters'
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload, {
  loading
}) // 内部会注册一个全部指令: lazy
Vue.component(Button.name, Button)
Vue.component('Split', Split)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
