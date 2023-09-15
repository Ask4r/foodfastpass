import {
  addComponentsDir,
  defineNuxtModule,
} from '@nuxt/kit';
import { resolve } from 'pathe';


export default defineNuxtModule({
  meta: {
    name: 'sidebar',
  },
  setup() {

    addComponentsDir({
      path: resolve(__dirname, './components'),
      pathPrefix: false,
    }).then();

  },
});
