<template>
    <section v-for="category  in skills.data" :key="skills.title" class="pt-10">
      <AppH2 class="text-3xl">> {{category.label}}</AppH2>
      <span class="flex flex-wrap mt-5 h-16">
        <SkillChip v-for="skill in category.skillset" dark class="mr-5 mb-5 text-lg">{{skill}}</SkillChip>
      </span>
    </section>
</template>

<script setup>
import AppSection from "./AppSection.vue";
import AppH2 from "./AppH2.vue";
import SkillChip from "./SkillChip.vue";
const props = defineProps({
  skills: Object
})
</script>

<style scoped>

</style>
