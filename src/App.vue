<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';

window.onload = function() {
  if (process.env.isMiniprogram) {
    // 小程序
    document.documentElement.style.fontSize = wx.getSystemInfoSync().screenWidth / 5 + 'px';
  } else {
    // Web 端
    document.documentElement.style.fontSize = window.screen.width / 5 + 'px';
  }
};

export default Vue.extend({
  name: 'App'
});
</script>
