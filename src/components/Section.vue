<template>
  <div class="min-w-screen min-h-screen place-content-center flex flex-col p-10">
    <h1 v-if="dataSet.title" class="text-5xl font-bold" >
      <font-awesome-icon v-if="dataSet.icon" :icon="dataSet.icon" class="mr-2"/>
      {{dataSet.title}}
    </h1>
    <article>
      <slot></slot>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  dataSet: Object
})
</script>

<style scoped>
</style>
