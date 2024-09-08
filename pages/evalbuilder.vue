<template>
  <UCard class="rounded-2xl m-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <h1 class="text-4xl font-bold m-1 mb-5">Eval Builder</h1>
      <EvalEditor />
    </div>
  </UCard>
</template>

<script lang="ts" setup>
import EvalEditor from '~/components/EvalEditor.vue';

</script>

<style>

</style>