<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';

const visible = ref(false);

const backToTop = () => {
    window.scrollTo(0, 0);
};

const scrollListener = () => {
    visible.value = window.scrollY > 150;
};

onMounted(() => {
    window.addEventListener('scroll', scrollListener);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollListener);
});
</script>

<template>
    <button v-show="visible" class="px-4 py-2 rounded-full fixed bottom-10 right-5 align-center font-semibold z-50 text-neutral-100
      hover:border-2 hover:shadow-[0_0_10px_grey] border border-gray-400 mix-blend-difference
      transition duration-900 ease" @click="backToTop()">
        <font-awesome-icon class="mr-1" icon="arrow-up"></font-awesome-icon>
        <slot></slot>
    </button>
</template>
