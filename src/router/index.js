import Vue from "vue";
import Router from "vue-router";

import Login from '../pages/login';
import layout from '../pages/layout';
import Home from '../pages/home'
const Goods = () => import('../pages/Goods')
const GoodUpload = () => import('../pages/goodUpload')
const Cart = () => import('../pages/cart')
const Order = () => import('../pages/order')



Vue.use(Router);

const router = new Router({
  routes: [{
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: '登录'
    }
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
  {
    path: '/goodUpload',
    component: layout,
    children: [{
      path: '/',
      component: GoodUpload,
      meta: {
        title: '商品上传'
      }
    }]
  },
  {
    path: '/cart',
    component: layout,
    children: [{
      path: '/',
      component: Cart,
      meta: {
        title: '购物车管理'
      }
    }]
  },
  {
    path: '/order',
    component: layout,
    children: [{
      path: '/',
      component: Order,
      meta: {
        title: '订单管理'
      }
    }]
  },


  ]
});

export default router;