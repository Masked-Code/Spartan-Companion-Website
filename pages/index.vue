
<template>
  <div class="flex flex-col justify-center items-center min-h-96 m-[5%] top-gradaient">
    <div class="mt-[30%] mb-[15%] mx-[20%] font-bold text-center">
      <div class="text-7xl p-10">
      <span
        class="gradient-text pb-4"
        :style="{ animationDuration: animationDuration }"
      >
        Navy
      </span> paperwork, processes & utilities <span class="gradient-text pb-4" :style="{ animationDuration: animationDuration }">made easy</span>.</div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center mt-16 text-xl">Spartan Companion is a one stop shop, for sailors by sailors. Get your packages routed faster and easier with the most optimal information.</div>
  <div class="flex flex-col justify-center items-center mt-2 text-xl">Learn new skills like web development or enterprise networking at a lightning-fast pace.</div>
  <div class="flex flex-col justify-center items-center mt-2 text-xl">Receive the lessons and experience passed down to make the Navy of tomorrow better than it is today.</div>
  <div class="flex flex-col justify-center items-center mt-12 text-xl">
    <UButton icon="i-heroicons-arrow-right" :trailing="true">Get Started</UButton>
  </div>
</template>
  
<script setup lang="ts">
const animationDuration = `5s`
</script>

<style scoped>
.gradient-text {
  display: inline-block;
  background: linear-gradient(140deg, #4ade80, #4ade80, #121212, #4ade80, #4ade80);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: scroll-gradient linear infinite;
}

@keyframes scroll-gradient {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.top-gradaient {
  margin: 0;
  height: 10vh;
  background: linear-gradient(to bottom, #0e5729 1%, transparent 99%);
}
</style>
