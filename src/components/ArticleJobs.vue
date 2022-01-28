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
import {jobs} from "../data.json"
import AppSection from "./AppSection.vue";

</script>

<style scoped>

</style>
