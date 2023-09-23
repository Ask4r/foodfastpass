import {
  addComponentsDir,
  addImportsDir,
  defineNuxtModule,
  extendPages,
} from '@nuxt/kit';
import { resolve } from 'pathe';


export default defineNuxtModule({
  meta: {
    name: 'account',
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
      pages.push(
        {
          name: 'Account',
          path: '/account',
          file: resolve(__dirname, './pages/account.vue'),
        },
        {
          name: 'UserConfirm',
          path: '/confirm/:uid/:token',
          file: resolve(__dirname, './pages/confirm.vue'),
        },
        {
          name: 'Registration',
          path: '/registration',
          file: resolve(__dirname, './pages/registration.vue'),
        },
        {
          name: 'ResetPassword',
          path: '/reset_password/:uid/:token',
          file: resolve(__dirname, './pages/reset-password.vue'),
        },
        {
          name: 'RequestReset',
          path: '/request_reset',
          file: resolve(__dirname, './pages/request-reset.vue'),
        },
      );
    });

  },
});
