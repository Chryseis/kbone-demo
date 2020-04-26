import { env } from '@/utils';
import router from '@/router';

export default {
  push(url) {
    if (env.isMiniprogram) {
      window.open(url);
    } else {
      router.push(url);
    }
  },
  replace(url) {
    if (env.isMiniprogram) {
      window.location.href = url;
    } else {
      router.replace(url);
    }
  }
};
