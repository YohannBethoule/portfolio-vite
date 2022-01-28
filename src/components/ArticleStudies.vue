<template>
    <section v-for="formation in studies.data" :key="formation.title">
      <AppSection :title="formation.title"
        :date="formation.date"
                  :place="formation.place">
        <div v-for="subject in formation.main_subjects">
          {{subject}}
        </div>
      </AppSection>
    </section>
</template>

<script setup>
import {studies} from "../data.json"
import AppSection from "./AppSection.vue";

</script>

<style scoped>

</style>
