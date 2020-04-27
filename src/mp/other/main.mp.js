import Vue from 'vue';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from '../../App.vue';
import store from '../../store';
import List from '@/list/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/list/:id',
      name: 'List',
      component: List
    }
  ]
});

export default function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  Vue.config.productionTip = false;

  sync(store, router);

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  });
}
