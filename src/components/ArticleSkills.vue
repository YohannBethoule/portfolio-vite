<template>
    <section v-for="category  in skills.data" :key="skills.title" class="pt-10">
      <AppH2 class="text-3xl">> {{ category.label }}</AppH2>
      <span class="flex flex-wrap mt-5 justify-center md:justify-start">
        <AppSkillCard v-for="skill in category.skillset" :image="skill.image" :name="skill.name" class="mr-2 md:mr-5"
                      dark></AppSkillCard>
      </span>
    </section>
</template>

<script setup>
import AppH2 from "./AppH2.vue";
import AppSkillCard from "./AppSkillCard.vue";
const props = defineProps({
  skills: Object
})
</script>

<style scoped>

</style>
