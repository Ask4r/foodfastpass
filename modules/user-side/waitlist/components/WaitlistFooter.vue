<script setup lang="ts">

</script>

<template>
  <footer class="footer-container">

    <p class="rights">© 2023 FoodFastPass. All rights reserved.</p>

  </footer>
</template>

<style scoped>

.footer-container {
    padding: 7.1rem 3rem .8rem 3rem;

    background: linear-gradient(
            80deg,
            #A96DDDFF,
            #6432F4FF,
            #A96DDDFF
    );
    background-size: 500% 500%;
    animation: gradient 10s ease-in-out infinite;
}

@keyframes gradient {
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
}


.rights {
    margin: 0;

    font-family: 'Inter', serif;
    font-style: normal;
    font-weight: 700;
    font-size: .8rem;
    line-height: 100%;
    letter-spacing: -0.04em;
    text-align: center;
    color: #FFFFFF;
}

</style>