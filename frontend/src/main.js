import Vue from 'vue';
import App from './App.vue';
import axios from './plugins/axios'
import router from './plugins/router';
import store from './plugins/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
