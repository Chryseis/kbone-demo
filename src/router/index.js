import Vue from 'vue';
import Router from 'vue-router';

const GoodsList = () => import(/* webpackChunkName: "Home" */ '../goodsList/index.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: GoodsList
    }
  ]
});
