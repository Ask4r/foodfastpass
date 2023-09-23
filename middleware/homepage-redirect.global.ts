export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {

    // TODO: proper middleware
    /*if (to.path === '/') {
      return navigateTo('/restaurants');
    }*/

    if (to.path === '/waitlist') {
      return navigateTo('/waitlist/testtest');
    }

  }
});