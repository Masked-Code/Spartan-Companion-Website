<template>
  <div class="rounded-3xl m-10 flex flex-row justify-between">
    <div class="flex flex-row items-center">
      <ULink to="/"><img class="m-3 rounded-2xl" src="@/assets/spartan.jpg" width="80" height="80" alt="Spartan Companion"/></ULink>
      <ULink class="flex text-center text-primary text-3xl" to="/">Spartan Companion</ULink>
    </div>
    <div class="flex flex-row">
      <ULink class="m-3 text-xl text-primary" to="https://www.mynavyhr.navy.mil" target="_blank">MyNavy-HR</ULink>
      <ULink class="m-3 text-xl text-primary" to="https://www.applocker.navy.mil" target="_blank">App-Locker</ULink>
      <ULink class="m-3 text-xl text-primary" to="https://my.navy.mil/quick-links.html" target="_blank">Quick-Links</ULink>
      <ULink class="m-3 text-xl text-primary" to="/guides">Guides</ULink>
      <ULink class="m-3 text-xl text-primary" to="/login">Login</ULink>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>

<style>
</style>