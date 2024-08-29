<template>
  <div class="rounded-3xl m-2 flex flex-row justify-between">
    <div class="flex flex-row items-center">
      <ULink to="/"><img class="m-3" src="@/assets/crossed_swords.png" width="50" height="50" alt="Spartan Companion"/></ULink>
      <ULink class="flex text-center text-primary text-3xl" to="/">Spartan Companion</ULink>
    </div>
    <div class="flex flex-row items-center">
      <ULink class="m-3 text-xl text-primary" to="https://www.mynavyhr.navy.mil" target="_blank">MyNavy-HR</ULink>
      <ULink class="m-3 text-xl text-primary" to="https://www.applocker.navy.mil" target="_blank">App-Locker</ULink>
      <ULink class="m-3 text-xl text-primary" to="https://my.navy.mil/quick-links.html" target="_blank">Quick-Links</ULink>
      <ULink class="m-3 text-xl text-primary" to="/guides">Guides</ULink>
    </div>
    <div class="flex flex-row items-center mr-8">
     <UButton class="m-4" size="lg" color="primary" variant="link">Log In</UButton>
     <UButton class="m-4" size="lg" color="primary" variant="solid">Sign Up</UButton>
    </div>
  </div>
  <div class="flex flex-grow container">
    <div class="flex flex-grow bottom-radial-gradient"></div>
  </div>
</template>
<script lang="ts" setup>
</script>

<style>
.container {
    position: relative;
}

.bottom-radial-gradient {
    position: fixed;
    height: 0.2rem;
    width: 100%;
    background: radial-gradient(circle, #4ade80, transparent);
    background-position: center;
    background-repeat: no-repeat;
}
</style>
