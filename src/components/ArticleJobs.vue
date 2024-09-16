<template>
    <section v-for="job in jobs.data" :key="jobs.title">
        <Article :date="job.date"
                 :place="job.place ? (job.company + ', ' + job.place) : job.company"
                 :title="job.title">
            <p>{{ job.description }}</p>
            <div class="flex flex-wrap">
                <SkillChip v-for="skill in job.technos" class="mb-2 mr-3">{{ skill }}</SkillChip>
            </div>
        </Article>
    </section>
</template>

<script setup>
import Article from "./Article.vue";
import SkillChip from "./SkillChip.vue";

const props = defineProps({
    jobs: Object
})
</script>

<style scoped>

</style>
