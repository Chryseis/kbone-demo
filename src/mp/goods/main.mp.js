import Vue from 'vue';
import Router from 'vue-router';
import createMpWrapper from '@/utils/createMpWrapper';

import Goods from '@/goodsList/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
});

export default () => createMpWrapper(router);
