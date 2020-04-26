import Vue from 'vue';
import Router from 'vue-router';

const Goods = () => import(/* webpackChunkName: "goods-web" */ '../goodsList/index.vue');
const GoodsDetail = () => import(/* webpackChunkName: "goodsDetail-web" */ '../GoodsDetail/index.vue');
const H5 = () => import(/* webpackChunkName: "h5-web" */ '../h5/index.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/h5/:src',
      name: 'h5',
      component: H5
    }
  ]
});
