<script setup>
import ArticleHeading from "./ArticleHeading.vue";
import SkillCard from "./SkillCard.vue";

const props = defineProps({
    skills: Object
})
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article v-for="category  in skills.data" :key="skills.title" class="pt-10">
            <ArticleHeading>> {{ category.label }}</ArticleHeading>
            <ul class="flex flex-wrap mt-8 justify-center md:justify-start">
                <li v-for="skill in category.skillset"
                    class="mb-5 mr-2 md:mr-5 relative group w-[45%] h-auto sm:w-48 sm:h-32 md:h-32">
                    <SkillCard :image="skill.image" :name="skill.name" dark/>
                </li>
            </ul>
        </article>
    </div>
</template>