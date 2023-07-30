import {
  addComponentsDir,
  addImportsDir,
  defineNuxtModule,
} from '@nuxt/kit';
import { resolve } from 'pathe';


export default defineNuxtModule({
  meta: {
    name: 'icons',
  },
  setup() {

    addImportsDir([
      resolve(__dirname, './composables'),
    ]);

    addComponentsDir({
      path: resolve(__dirname, './components'),
      pathPrefix: false,
    }).then();

  },
});