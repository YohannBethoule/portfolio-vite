<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section v-for="category  in skills.data" :key="skills.title" class="pt-10">
          <AppH2 class="text-3xl">> {{ category.label }}</AppH2>
          <span class="flex flex-wrap mt-8 justify-center md:justify-start">
            <AppSkillCard v-for="skill in category.skillset" :image="skill.image" :name="skill.name" class="mr-2 md:mr-5"
                          dark></AppSkillCard>
          </span>
        </section>
    </div>
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
