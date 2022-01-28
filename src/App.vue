

<template>
  <Section class="bg-black text-white" :dataSet="json.infos"> <PageInfos></PageInfos> </Section>
  <Section class="bg-white text-black" :dataSet="json.studies"> <ArticleStudies/> </Section>
  <Section class="bg-black text-white" :dataSet="json.jobs"> <ArticleJobs/> </Section>
  <Section class="bg-white text-black" :dataSet="json.skills"> <ArticleSkills/> </Section>
  <Section class="bg-black text-white" :dataSet="json.projects"> <ArticleProjects/> </Section>
</template>

<script setup>
import json from './data.json'
import Section from './components/Section.vue';
import PageInfos from "./components/PageInfos.vue";
import ArticleStudies from "./components/ArticleStudies.vue";
import ArticleJobs from "./components/ArticleJobs.vue";
import ArticleProjects from "./components/ArticleProjects.vue";
import ArticleSkills from "./components/ArticleSkills.vue";

</script>

<style>
</style>
