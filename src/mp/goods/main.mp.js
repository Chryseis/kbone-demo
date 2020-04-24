import Vue from 'vue';
import Router from 'vue-router';
import createMpWrapper from '@/utils/createMpWrapper';

import GoodList from '@/goodsList/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: GoodList
    }
  ]
});

export default () => createMpWrapper(router);
