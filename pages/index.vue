
<template>
    <div>
        <div class="background-animation" id="animation-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        </div>
        <div class="flex flex-col justify-center items-center min-h-96 m-[5%] top-gradaient">
            <div class="mt-[30%] mb-[15%] mx-[20%] font-bold text-center">
                <div class="text-7xl p-10 gradient-text" :style="{ animationDuration: animationDuration }">
                    <span>Navy</span><span class="text-white"> paperwork, processes & utilities </span><span>made easy</span><span class="text-white">.</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center mt-20 text-xl">Spartan Companion is a one stop shop, for sailors by sailors. Get your packages routed faster and easier with the most optimal information.</div>
        <div class="flex flex-col justify-center items-center mt-2 text-xl">Learn new skills like web development or enterprise networking at a lightning-fast pace.</div>
        <div class="flex flex-col justify-center items-center mt-2 text-xl">Receive the lessons and experience passed down to make the Navy of tomorrow better than it is today.</div>
        <div class="flex flex-col justify-center items-center mt-12 text-xl">
        <UButton icon="i-heroicons-arrow-right" :trailing="true">Get Started</UButton>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const animationDuration = `5s`
</script>

<style scoped>
.gradient-text {
  display: inline-block;
  background: linear-gradient(140deg, #4ade80, #4ade80, #4ade80, #121212, #4ade80, #4ade80, #4ade80);
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

.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

@keyframes riseUp {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    50% {
        opacity: 0.7;
    }
    100% {
        transform: translateY(-100vh);
        opacity: 0.9;
    }
}

.circle {
    position: absolute;
    bottom: 0;
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgba(0, 255, 0, 0.5);
    border-radius: 50%;
    animation: riseUp 6s ease-in infinite;
}

.circle:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
    opacity: 0; 
}
.circle:nth-child(2) {
    left: 30%;
    animation-delay: 2.2s;
    opacity: 0; 
}
.circle:nth-child(3) {
    left: 50%;
    animation-delay: 4.1s;
    opacity: 0; 
}
.circle:nth-child(4) {
    left: 70%;
    animation-delay: 6.7s;
    opacity: 0; 
}
.circle:nth-child(5) {
    left: 90%;
    animation-delay: 8.3s;
    opacity: 0; 
}
.circle:nth-child(6) {
    left: 64%;
    animation-delay: 1.2s;
    opacity: 0; 
}
.circle:nth-child(7) {
    left: 02%;
    animation-delay: 3s;
    opacity: 0; 
}
.circle:nth-child(8) {
    left: 42%;
    animation-delay: 5s;
    opacity: 0; 
}
.circle:nth-child(9) {
    left: 90%;
    animation-delay: 7s;
    opacity: 0; 
}
.circle:nth-child(10) {
    left: 53%;
    animation-delay: 9s;
    opacity: 0; 
}
.circle:nth-child(11) {
    left: 70%;
    animation-delay: 11s;
    opacity: 0; 
}
.circle:nth-child(12) {
    left: 29%;
    animation-delay: 5.7s;
    opacity: 0; 
}
.circle:nth-child(13) {
    left: 21%;
    animation-delay: 2.8s;
    opacity: 0; 
}
.circle:nth-child(14) {
    left: 79%;
    animation-delay: 2.7s;
    opacity: 0; 
}
.circle:nth-child(15) {
    left: 92%;
    animation-delay: 7.8s;
    opacity: 0; 
}
.circle:nth-child(16) {
    left: 55%;
    animation-delay: 0.8s;
    opacity: 0; 
}
</style>
