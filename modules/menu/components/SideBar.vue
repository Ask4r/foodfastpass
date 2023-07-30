<script setup lang="ts">

import { vOnClickOutside } from '@vueuse/components';


interface Props {
  isActive: boolean;
  areFiltersActive: boolean;
}

interface Emits {
  'update:isActive': [value: boolean];
  'update:areFiltersActive': [value: boolean];
}

defineProps<Props>();

const emits = defineEmits<Emits>();


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
    <SidebarFilters
      @click="close(); emits('update:areFiltersActive', true)"
    />
    <SidebarCart
      @click="close();"
    />
    <SidebarSuggestion
      @click="close(); $router.push('/suggest')"
    />

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

  &_active {
    translate: 0;
  }
}

</style>