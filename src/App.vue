

<template>
  <div class="flex scroll-smooth">
    <button
        class="fixed top-5 left-5 text-3xl text-red-600 z-50"
        @click="toggleNav(true)"><font-awesome-icon icon="bars"/></button>
    <AppNav :navigation="json.navigation" :is-open="navOpen" :close="toggleNav"></AppNav>
    <main id="main" class="transform top-0 left-0 w-full ease-in-out transition-all duration-300"
          :class="navOpen ? 'translate-x-96 pr-96' : ''">
      <Section id="page-infos" class="bg-black text-white" :dataSet="json.infos"> <PageInfos></PageInfos> </Section>
      <Section id="page-studies" class="bg-white text-black" :dataSet="json.studies"> <ArticleStudies/> </Section>
      <Section id="page-jobs" class="bg-black text-white" :dataSet="json.jobs"> <ArticleJobs/> </Section>
      <Section id="page-skills" class="bg-white text-black" :dataSet="json.skills" > <ArticleSkills/> </Section>
      <Section id="page-projects" class="bg-black text-white" :dataSet="json.projects"> <ArticleProjects/> </Section>
    </main>
  </div>


</template>

<script setup>
import json from './data.json'
import Section from './components/Section.vue';
import PageInfos from "./components/PageInfos.vue";
import ArticleStudies from "./components/ArticleStudies.vue";
import ArticleJobs from "./components/ArticleJobs.vue";
import ArticleProjects from "./components/ArticleProjects.vue";
import ArticleSkills from "./components/ArticleSkills.vue";
import AppNav from "./components/AppNav.vue";

</script>

<script>
export default {
  name: "App",
  methods: {
    toggleNav(isOpen) {
      this.navOpen = isOpen;
    }
  },
  data() {
    return {
      navOpen: false,
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
