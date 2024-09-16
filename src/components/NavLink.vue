<script setup>
const props = defineProps({
    icon: String
});
</script>

<template>
  <a class="hover:font-bold hover:underline whitespace-normal">
    <font-awesome-icon :icon="icon" class="mr-2"/>
    <slot></slot>
  </a>
</template>
