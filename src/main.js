import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import 'kbone-ui/lib/weui/weui.css';

Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable */
const Vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

export default Vm;
