<template>
  <wx-web-view v-if="isMiniprogram" :src="$route.params.src"></wx-web-view>
  <iframe class="iframe" v-else :src="$route.params.src" frameborder="0"></iframe>
</template>

<script>
import { env } from '@/utils';

export default {
  name: 'index',
  data() {
    return {
      isMiniprogram: env.isMiniprogram
    };
  },
  created() {
    console.log(this.$route);
  }
};
</script>

<style>
.iframe {
  width: 100%;
  height: 100vh;
}
</style>
