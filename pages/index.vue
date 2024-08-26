
<template>
  <div class="flex flex-col justify-center items-center min-h-96 m-[5%]">
    <div class="flex flex-col mt-24 mb-24 justify-center items-center">
      <div
        class="gradient-text text-9xl font-bold text-center p-8"
        :style="{ animationDuration: animationDuration }"
      >
      Spartan Companion
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const animationDuration = `5s`
</script>

<style scoped>
.gradient-text {
  display: inline-block;
  background: linear-gradient(100deg, #828c94,  #738595, #738595, #bd0505, #738595, #738595, #828c94);
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
</style>
