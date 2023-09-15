import {
  defineNuxtModule,
  extendPages,
} from '@nuxt/kit';
import { resolve } from 'pathe';


export default defineNuxtModule({
  meta: {
    name: 'BOHAuth',
  },
  setup() {

    extendPages((pages) => {
      pages.push({
        name: 'BOHAuth',
        path: '/boh/auth',
        file: resolve(__dirname, './pages/auth.vue'),
      });
    });

  },
});
