<template>
  <div :class="dark ? 'text-neutral-100 bg-black' : 'bg-neutral-100'"
       class="min-h-screen place-content-center flex flex-col py-28 px-12 md:px-16 app-section">
    <AppH1 v-if="dataSet.title" class="mb-10">
      <font-awesome-icon v-if="dataSet.icon" :icon="dataSet.icon" class="mr-2"/>
      {{ dataSet.title }}
    </AppH1>
    <article>
      <slot></slot>
    </article>
  </div>
</template>

<script setup>
import AppH1 from "./AppH1.vue";

const props = defineProps({
  dataSet: Object,
  dark: Boolean,
})
</script>

<style scoped>
</style>
