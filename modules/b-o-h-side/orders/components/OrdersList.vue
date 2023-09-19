<script setup lang="ts">

const orders = ref(await getBOHOrders());


provide('refreshOrders', refreshOrders);


async function refreshOrders() {
  orders.value = await getBOHOrders();
}

</script>

<template>
  <div class="queue">
    <QueueOrder
      v-for="order in orders"
      :key="order.orderId"
      :order="order"
    />
  </div>
</template>

<style scoped lang="scss">

.queue {
  margin: 0 2.4rem 5.4rem 2.4rem;
  padding-bottom: 5.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  border-bottom: 2px solid var(--light-color);
}

</style>