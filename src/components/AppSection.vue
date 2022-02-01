<template>
  <div class="mt-10">
    <AppH2>> {{title}}<span class="text-red-600 text-2xl">, {{date}}</span></AppH2>
    <h2 class="text-2xl">{{place}}</h2>
    <p>
      <slot></slot>
    </p>
  </div>


</template>

<script setup>
import AppH2 from "./AppH2.vue";

const props = defineProps({
  title: String,
  date: String,
  place: String
})
</script>

<style scoped>

</style>
