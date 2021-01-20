import Vue from "vue";
import Router from "vue-router";


import Login from '../pages/login';
import layout from '../pages/layout';
import Home from '../pages/home'
import Goods from '../pages/Goods'

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/login",
      name: "login",
      component: Login,
      // redirect: '/login',
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children: [{
        path: "/home",
        component: Home,
        meta: {
          title: '首页'
        }
      }]
    },
    {
      path: '/goods',
      component: layout,
      children: [{
        path: '/',
        component: Goods,
        meta: {
          title: '商品管理'
        }
      }]
    },

  ]
});