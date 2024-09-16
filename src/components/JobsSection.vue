<script setup>
import Article from "./Article.vue";
import SkillChip from "./SkillChip.vue";

const props = defineProps({
    jobs: Object
})
</script>

<template>
    <Article v-for="job in jobs.data" :key="jobs.title" :date="job.date"
             :place="job.place ? (job.company + ', ' + job.place) : job.company"
             :title="job.title">
        <p>{{ job.description }}</p>
        <ul class="flex flex-wrap">
            <li v-for="skill in job.technos" class="mb-2 mr-3">
                <SkillChip>{{ skill }}</SkillChip>
            </li>

        </ul>
    </Article>
</template>