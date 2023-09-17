<script setup lang="ts">

import { Order } from '~/modules/b-o-h-side/orders/types';


const orders = ref(await getBOHOrders());


provide('refreshOrders', refreshOrders);


async function refreshOrders() {
  orders.value = await getBOHOrders();
  console.log(orders.value);
}

</script>

<template>
  <article class="orders">

    <HeaderForBOH/>

    <main class="orders__main">

      <client-only>
        <div class="orders__queue">
          <QueueOrder
            v-for="order in orders"
            :key="order.orderId"
            :order="order"
          />
        </div>
      </client-only>

      <!--      <div class="orders__complete">
              <DoneOrder
                v-for="order in doneOrders"
                :key="order.orderId"
                :order="order"
              />
            </div>-->

    </main>

  </article>
</template>

<style scoped lang="scss">

.orders {

  &__main {
    margin-top: 13.4rem;
  }

  &__queue {
    margin: 0 2.4rem 5.4rem 2.4rem;
    padding-bottom: 5.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    border-bottom: 2px solid var(--light-color);
  }

  &__complete {
    margin: 0 2.4rem 5.4rem 2.4rem;
    padding-bottom: 5.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
}

</style>