<script setup>
import {onMounted, ref} from 'vue';
import NavLink from './NavLink.vue';

const props = defineProps({
    isOpen: Boolean,
    close: Function,
    navigation: Array
});

const offsets = ref({
    "page-projects": 0,
    "page-jobs": 0,
    "page-infos": 0,
    "page-skills": 0
});

onMounted(() => {
    Object.keys(offsets.value).forEach(anchor => {
        offsets.value[anchor] = document.getElementById(anchor).offsetTop;
    });
});
</script>

<template>
    <aside
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        class="transform top-0 left-0 w-screen md:w-96 bg-[#D50000] fixed h-screen overflow-hidden ease-in-out transition-all duration-300 z-30">
        <nav class="flex flex-col text-3xl h-full">
            <button aria-label="close menu" class="ml-auto mr-3 text-5xl hover:underline hover:font-bold"
                    @click="close()">
                &times;
            </button>
            <ul class="flex flex-col space-y-10 px-3 justify-center my-auto">
                <li v-for="nav in navigation" :key="nav.title" class="text-center">
                    <NavLink :href="'#'+nav.anchor" :icon="nav.icon" @click="close()">{{ nav.title }}</NavLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>
