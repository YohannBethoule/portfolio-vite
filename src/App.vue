

<template>
  <div class="flex scroll-smooth">
    <button
        class="fixed top-5 left-5 text-3xl text-[#D50000] z-20"
        @click="toggleNav(true)"><font-awesome-icon icon="bars"/></button>
    <div class="flex absolute top-5 right-5 z-20">
      <button
          class="mr-5 w-10 hover:border-2 border-white" @click="lang='FR'"><img src="/images/fr.svg"/></button>
      <button
          class="w-10 hover:border-2 border-white" @click="lang='EN'"><img src="/images/gb.svg"/></button>

    </div>

    <AppNav :navigation="trad.navigation" :is-open="navOpen" :close="toggleNav"></AppNav>
    <main id="main" class="transform top-0 left-0 w-full ease-in-out transition-all duration-300"
          :class="navOpen ? 'translate-x-96 pr-96' : ''">
      <Section id="page-infos" dark :dataSet="trad.infos">
        <PageInfos :infos="trad.infos"></PageInfos>
      </Section>
      <Section id="page-skills" :dataSet="trad.skills">
        <ArticleSkills :skills="trad.skills"/>
      </Section>
      <Section id="page-projects" :dataSet="trad.projects" dark>
        <ArticleProjects :projects="trad.projects"/>
      </Section>
      <Section id="page-jobs" :dataSet="trad.jobs">
        <ArticleJobs :jobs="trad.jobs"/>
      </Section>
      <Section id="page-studies" dark :dataSet="trad.studies">
        <ArticleStudies :studies="trad.studies"/>
      </Section>
    </main>
  </div>
</template>

<script setup>
import json from './data.json';
import Section from './components/Section.vue';
import PageInfos from "./components/PageInfos.vue";
import ArticleStudies from "./components/ArticleStudies.vue";
import ArticleJobs from "./components/ArticleJobs.vue";
import ArticleProjects from "./components/ArticleProjects.vue";
import ArticleSkills from "./components/ArticleSkills.vue";
import AppNav from "./components/AppNav.vue";</script>

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
      lang: "FR"
    }
  },
  computed: {
    trad: function(){
      return json[this.lang];
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
