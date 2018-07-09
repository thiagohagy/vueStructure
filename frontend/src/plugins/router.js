import Vue from 'vue';
import Router from 'vue-router';

import Login from './../components/auth/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        humanName: 'Login'
      }
    },
  ],
});
