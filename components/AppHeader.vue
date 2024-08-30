<template>
  <div class="flex flex-row justify-between header">
    <div class="flex flex-row items-center">
      <ULink to="/"><img class="m-3" src="@/assets/crossed_swords.png" width="50" height="50" alt="Spartan Companion"/></ULink>
      <ULink class="flex text-center text-primary text-3xl" to="/">Spartan Companion</ULink>
    </div>
    <div class="flex flex-row items-center">
      <UButton class="m-3 text-lg text-primary" variant="link" to="https://www.mynavyhr.navy.mil" target="_blank">MyNavy-HR</UButton>
      <UButton class="m-3 text-lg text-primary" variant="link" to="https://www.applocker.navy.mil" target="_blank">App-Locker</UButton>
      <UButton class="m-3 text-lg text-primary" variant="link" to="https://my.navy.mil/quick-links.html" target="_blank">Quick-Links</UButton>
      <UButton class="m-3 text-lg text-primary" variant="link" to="/guides">Guides</UButton>
      <UButton class="m-3 text-lg text-primary" variant="link" to="/scope">Scope</UButton>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="primary" label="Paperwork" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown>
    </div>
    <div class="flex flex-row items-center">
     <UButton class="m-4 text-lg" size="md" color="primary" variant="link">Log In</UButton>
     <UButton class="m-4 text-lg" size="md" color="primary" variant="solid">Sign Up</UButton>
    </div>
  </div>
  <div class="flex flex-grow container">
    <div class="flex flex-grow bottom-radial-gradient"></div>
  </div>
</template>
<script lang="ts" setup>
const items = [ 
  [{
    label: 'LaDR/OaRS',
    icon: 'i-heroicons-newspaper',
    href: '/ladr'
  }, {
    label: 'Bibliogrophies',
    icon: 'i-heroicons-document',
    href: '/bibs'
  }]
]
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

.header {
  background-color: rgba(27, 27, 27, 0.9);
  padding: 5px;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  position: fixed;
  z-index: 1000;
}
</style>
