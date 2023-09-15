import {
  addComponentsDir,
  addImportsDir,
  defineNuxtModule,
  extendPages,
} from '@nuxt/kit';
import { resolve } from 'pathe';


export default defineNuxtModule({
  meta: {
    name: 'cart',
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
        name: 'Cart',
        path: '/cart',
        file: resolve(__dirname, './pages/cart.vue'),
      });
    });

  },
});
