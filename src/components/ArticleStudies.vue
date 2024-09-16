<template>
    <section v-for="formation in studies.data" :key="formation.title">
        <Article :title="formation.title"
        :date="formation.date"
                  :place="formation.place">
        <div v-for="subject in formation.main_subjects">
          {{subject}}
        </div>
        </Article>
    </section>
</template>

<script setup>
import Article from "./Article.vue";

const props = defineProps({
  studies: Object
})
</script>

<style scoped>

</style>
