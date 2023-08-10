<script setup lang="ts">

import { vOnClickOutside } from '@vueuse/components';

interface Props {
  isActive: boolean;
  areFiltersActive: boolean;
}

interface Emits {
  'update:isActive': [ value: boolean ];
  'update:areFiltersActive': [ value: boolean ];
}

defineProps<Props>();

const emits = defineEmits<Emits>();


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

</script>

<template>
  <nav
    v-on-click-outside="close"
    class="sidebar"
    :class="{'sidebar_active': isActive}"
  >

    <SidebarCross
      @click="close()"
    />
    <ReturnArrow
      class="header__return"
      @click="close(); router.go(-1)"
    />
    <SidebarFilters
      @click="close(); emits('update:areFiltersActive', true)"
    />
    <SidebarCart
      @click="close()"
    />
    <SidebarSuggestion
      @click="close(); router.push('/suggest')"
    />
    <ClientOnly>
      <SidebarInstall
        @click="close(); $pwa?.install()"
      />
    </ClientOnly>

  </nav>
</template>

<style scoped lang="scss">

.sidebar {
  height: 100dvh;

  padding: 2.4rem;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

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
}

</style>