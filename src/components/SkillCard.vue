<script setup>
import {computed} from "vue";

const props = defineProps({
    name: String,
    image: String
});

const imageUrl = computed(() => new URL(`../assets/images/skills/${props.image}`, import.meta.url).href);
</script>

<template>
    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600
      blur opacity-10 group-hover:opacity-100 transition duration-300 group-hover:duration-300"></div>
    <div
        class="relative h-full text-center flex flex-col justify-center bg-white ring-1 ring-gray-900/5 leading-none py-2">
        <img v-if="image" :alt="name" :src="imageUrl" class="h-12 mx-auto mt-3 sm:h-10 sm:mt-5">
        <div class="my-2 font-bold text-lg">
            {{ name }}
        </div>
    </div>
</template>
