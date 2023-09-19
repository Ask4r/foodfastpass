export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {

    // TODO: proper middleware
    /*if (to.path === '/') {
      return navigateTo('/restaurants');
    }*/

  }
});