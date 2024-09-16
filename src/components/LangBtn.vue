<script setup>
import {defineEmits, defineProps} from 'vue';

const props = defineProps({
    lang: {
        type: String,
        required: true
    },
    ariaLabel: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['changeLanguage']);

const handleClick = () => {
    emit('changeLanguage', props.lang);
};
</script>

<template>
    <button
        :aria-label="ariaLabel"
        class="w-10 hover:border-2 border-white"
        @click="handleClick">
        <img :alt="altText" :src="imageSrc"/>
    </button>
</template>

