import {
  addComponentsDir,
  addImportsDir,
  defineNuxtModule,
  extendPages,
} from '@nuxt/kit';
import { resolve } from 'pathe';


export default defineNuxtModule({
  meta: {
    name: 'restaurants',
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
        name: 'Restaurants',
        path: '/restaurants',
        file: resolve(__dirname, './pages/restaurants.vue'),
      });
    });

  },
});
