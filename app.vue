<template>
  <NuxtLayout>
    <AppHeader />
    <div>
      <NuxtPage keepalive/>
    </div>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
useHead({
  title: 'Spartan Companion',
  meta: [
    { name: 'description', content: 'Spartan Companion' },
    { name: 'og:description', content: 'Navy Paperwork Assistant' },
    { name: 'og:title', content: 'Spartan Companion'},
    { name: 'og:url', content: 'https://www.spartancompanion.com'},
    { name: 'lang', content: 'English'},
    { name: 'twitter:title', content: 'Spartan Companion'},
    { name: 'twitter:description', content: 'Navy Paperwork Assistant'},
    { name: 'twitter:card', content: 'summary'},
  ],
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.1;
  filter: blur(1rem);
}
</style>