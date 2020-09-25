import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/reset.css';
import './assets/main.less';

import { Button } from 'ant-design-vue';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
