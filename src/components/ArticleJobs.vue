<template>
    <section v-for="job in jobs.data" :key="jobs.title">
      <AppSection :title="job.title"
                  :date="job.date"
                  :place="job.company + ', ' + job.place">
        <div>{{job.description}}</div>
        <div>{{job.technos}}</div>
      </AppSection>
    </section>
</template>

<script setup>
import AppSection from "./AppSection.vue";
const props = defineProps({
  jobs: Object
})
</script>

<style scoped>

</style>
