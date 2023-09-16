<script setup lang="ts">

import { loadStripe } from '@stripe/stripe-js';


defineExpose({
  payWithCard,
});


const cardElement = ref();

const stripe = await loadStripe(useRuntimeConfig().public.publishableKey);

const elements = stripe?.elements();

const cardStyle = {
  base: {
    color: '#32325d',
    fontFamily: 'Arial, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#32325d',
    },
  },
  invalid: {
    fontFamily: 'Arial, sans-serif',
    color: '#fa755a',
    iconColor: '#fa755a',
  },
};

const card = elements?.create('card', { style: cardStyle });

onMounted(() => {
  card?.mount(cardElement.value);
});

async function payWithCard(clientSecret: string): Promise<any> {

  const result = await stripe?.confirmCardPayment(clientSecret, {
    payment_method: {
      card,
    },
  });

  return result;
}
</script>

<template>
  <form
    id="payment-form"
    class="form"
  >

    <div
      ref="cardElement"
      id="card-element"
      class="form__card"
    >
      <!-- Stripe.js injects the card element here. -->
    </div>

  </form>
</template>

<style scoped lang="scss">

.form {
  width: 100%;
}

</style>