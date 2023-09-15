import {
  addComponentsDir, addImportsDir,
  defineNuxtModule,
  extendPages,
} from '@nuxt/kit';
import { resolve } from 'pathe';


export default defineNuxtModule({
  meta: {
    name: 'BOHOrders',
  },
  setup() {

    addImportsDir([
      resolve(__dirname, './composables'),
      resolve(__dirname, './utils'),
    ]);

    addComponentsDir({
      path: resolve(__dirname, './components'),
      pathPrefix: false,
    }).then();

    extendPages((pages) => {
      pages.push({
        name: 'BOHOrders',
        path: '/boh/orders',
        file: resolve(__dirname, './pages/orders.vue'),
      });
    });
  },
});
