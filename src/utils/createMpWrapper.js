import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from '@/App.vue';
import store from '@/store';

export default function createMpWrapper(router) {
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
