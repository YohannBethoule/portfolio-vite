<template>
  <div class="m-10">
    <h1 class="text-3xl">> {{title}}<span class="text-red text-2xl">, {{date}}</span></h1>
    <h2 class="text-2xl">{{place}}</h2>
    <p>
      <slot></slot>
    </p>
  </div>


</template>

<script setup>
const props = defineProps({
  title: String,
  date: String,
  place: String
})
</script>

<style scoped>

</style>
