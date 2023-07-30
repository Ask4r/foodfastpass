<script setup lang="ts">

interface Props {
  isActive?: boolean;
}

withDefaults(
  defineProps<Props>(),
  { isActive: false },
);

</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="14"
    viewBox="0 0 21 14"
    fill="none"
  >
    <path
      class="path"
      id="Vector"
      d="M0 1.25C0 0.559644 0.559644 0 1.25 0H19.4622C20.1525 0 20.7122 0.559644 20.7122 1.25C20.7122 1.94036 20.1525 2.5 19.4622 2.5H1.25C0.559644 2.5 0 1.94036 0 1.25ZM5.75088 7.00136C5.75088 6.31101 6.31052 5.75136 7.00088 5.75136H19.4618C20.1522 5.75136 20.7118 6.31101 20.7118 7.00136C20.7118 7.69172 20.1522 8.25136 19.4618 8.25136H7.00088C6.31052 8.25136 5.75088 7.69172 5.75088 7.00136ZM12.7527 11.5022C12.0624 11.5022 11.5027 12.0619 11.5027 12.7522C11.5027 13.4426 12.0624 14.0022 12.7527 14.0022H19.4625C20.1528 14.0022 20.7125 13.4426 20.7125 12.7522C20.7125 12.0619 20.1528 11.5022 19.4625 11.5022H12.7527Z"
      :fill="isActive ? 'var(--primary-color)' : '#000'"
    />
  </svg>
</template>

<style scoped lang="scss">

.path {
  transition: all ease .2s;
}

</style>