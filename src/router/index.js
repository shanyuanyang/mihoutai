import Vue from "vue";
import Router from "vue-router";


import Login from '../pages/login';
import LayOut from '../pages/layOut';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
      // redirect: '/login',
    },
    {
      path: 'layout',
      name: 'layout',
      component: LayOut
    }

  ]
});
