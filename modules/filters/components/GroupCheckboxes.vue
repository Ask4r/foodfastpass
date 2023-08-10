<script setup lang="ts">

interface Props {
  title: string;
  toggleable: string[];
  verboseMap: Map<string, string>;
  toggled: string[];
}

const props = defineProps<Props>();


function handleToggle(toggledValue: string) {
  toggleArrayItem(toggledValue, props.toggled);
}

</script>

<template>
  <section class="group">

    <p class="group__title">
      {{title}}
    </p>

    <div class="group__checkboxes">

      <CheckboxFilter
        v-for="value in toggleable"
        :key="value"
        :filter-name="verboseMap.get(value) ?? ''"
        :is-active="toggled.includes(value)"
        @toggle="handleToggle(value)"
      />

    </div>

  </section>
</template>

<style scoped lang="scss">

.group {

  &__title {
    margin: 0 0 1.6rem 0;
    color: var(--medium-color);
    font: 500 normal 1.6rem/1.5 Inter, sans-serif;
  }

  &__checkboxes {
    display: grid;
    grid: auto-flow / 14rem 13rem;
    row-gap: 1.2rem;
    justify-content: space-between;
  }
}

</style>