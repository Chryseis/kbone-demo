import Vue from 'vue';
import Router from 'vue-router';
import createMpWrapper from '@/utils/createMpWrapper';
import GoodsDetail from '@/goodsDetail/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail
    }
  ]
});

export default () => createMpWrapper(router);
