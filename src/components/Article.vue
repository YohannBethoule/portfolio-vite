<script setup>
import ArticleHeading from "./ArticleHeading.vue";

const props = defineProps({
    title: String,
    date: String,
    place: String
})
</script>

<template>
    <article class="mt-10 space-y-3">
        <ArticleHeading>> {{ title }}<span class="text-red-600 text-2xl">, {{ date }}</span></ArticleHeading>
        <h3 class="text-2xl">{{ place }}</h3>
        <slot></slot>
    </article>
</template>