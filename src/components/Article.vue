<script setup>
import AppH2 from "./AppH2.vue";

const props = defineProps({
    title: String,
    date: String,
    place: String
})
</script>

<template>
    <article class="mt-10 space-y-4">
        <AppH2>> {{ title }}<span class="text-red-600 text-2xl">, {{ date }}</span></AppH2>
        <h3 class="text-2xl">{{ place }}</h3>
        <slot></slot>
    </article>
</template>



<style scoped>

</style>
