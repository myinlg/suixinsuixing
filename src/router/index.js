import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/index/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user',
      component: resolve => require(['@/pages/user/user'], resolve),
      children: [
        {
          path: '/',
          redirect: '/user/login',
          component: resolve => require(['@/pages/user/login'], resolve),
        },
        {
          path: '/user/login',
          name: 'user_login',
          component: resolve => require(['@/pages/user/login'], resolve),
        },
        {
          path: '/setting',
          name:'user_setting',
          component: resolve => require(['@/pages/setting/setting'], resolve),
        }
      ]
    },

  ],
});
