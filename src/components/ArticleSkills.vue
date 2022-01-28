<template>
    <section v-for="category  in skills.data" :key="skills.title" class="pt-10">
      <h2 class="text-3xl">> {{category.label}}</h2>
      <span class="flex space-x-5 mt-5">
        <SkillChip v-for="skill in category.skillset">{{skill}}</SkillChip>
      </span>

    </section>
</template>

<script setup>
import {skills} from "../data.json"
import AppSection from "./AppSection.vue";
import SkillChip from "./SkillChip.vue";

</script>

<style scoped>

</style>
