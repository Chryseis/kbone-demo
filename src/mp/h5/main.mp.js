import Vue from 'vue';
import Router from 'vue-router';
import createMpWrapper from '@/utils/createMpWrapper';

import H5 from '@/h5/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/h5/:src',
      name: 'h5',
      component: H5
    }
  ]
});

export default () => createMpWrapper(router);
