<script setup lang="ts">

import { vOnClickOutside } from '@vueuse/components';
import OrdersIcon from '~/modules/user-side/sidebar/icons/OrdersSideBarIcon.vue';
import LoyaltyIcon from '~/modules/user-side/sidebar/icons/LoyaltySideBarIcon.vue';
import ReportIcon from '~/modules/user-side/sidebar/icons/ReportSideBarIcon.vue';
import LogOutIcon from '~/modules/user-side/sidebar/icons/LogOutSideBarIcon.vue';


defineProps<{
  isActive: boolean;
  areFiltersActive: boolean;
}>();

const emits = defineEmits<{
  'update:isActive': [ value: boolean ];
  'update:areFiltersActive': [ value: boolean ];
}>();


const router = useRouter();

const { $pwa } = useNuxtApp();


onMounted(() => {
  $pwa.showInstallPrompt = true;
  $pwa.offlineReady = false;
  $pwa.needRefresh = false;
});


function close() {
  emits('update:isActive', false);
}

function logOut() {
  localStorage.setItem('foodfastpass_user_token', '');
  window.location.reload();
}

</script>

<template>
  <nav
    v-on-click-outside="close"
    class="sidebar"
    :class="{'sidebar_active': isActive}"
  >

    <HeaderForSideBar
      class="sidebar__header"
      @exit="close"
    />


    <div
      class="sidebar__item"
      @click="close(); navigateTo('/orders')"
    >
      <OrdersSideBarIcon />
      <p>Orders</p>
    </div>

    <div
      class="sidebar__item"
      @click="close(); navigateTo('/loyalty')"
    >
      <LoyaltySideBarIcon />
      <p>Loyalty</p>
    </div>

    <div
      class="sidebar__item sidebar__item_gap"
      @click="close(); navigateTo('/account')"
    >
      <AccountSideBarIcon />
      <p>Account details</p>
    </div>


    <div
      class="sidebar__item"
      @click="close(); navigateTo('/suggest')"
    >
      <ReportSideBarIcon />
      <p>Report a problem</p>
    </div>

    <div
      class="sidebar__item"
      @click="close(); logOut()"
    >
      <LogOutSideBarIcon style="margin-left: 0.2rem;"/>
      <p>Log out</p>
    </div>

  </nav>
</template>

<style scoped lang="scss">

.sidebar {
  height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  border-radius: 0 0.8rem 0.8rem 0;
  background: var(--white-color);

  /* shadow 3xl */
  box-shadow: 0 32px 64px -12px rgba(54, 54, 171, 0.14);

  translate: -100%;

  transition: all ease .2s;

  z-index: 3000;

  &_active {
    translate: 0;
  }

  &__header {
    margin-bottom: 1rem;
  }


  &__item {
    padding: 1.2rem 2.4rem;

    display: grid;
    grid: 2rem / 2rem max-content;
    place-items: center;
    gap: 0.8rem;

    color: var(--black-color);
    font: 400 normal 1.6rem/1.5 Inter, sans-serif;

    background: var(--white-color);
    box-shadow: 0 32px 64px -12px rgba(54, 54, 171, 0.14);

    &_gap {
      margin-bottom: 4rem;
    }
  }
}

</style>