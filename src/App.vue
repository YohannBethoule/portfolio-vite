<template>
    <div class="flex scroll-smooth">
        <button
            aria-label="open menu"
            class="fixed top-5 left-5 text-3xl text-[#D50000] z-20"
            @click="toggleNav(true)">
            <font-awesome-icon icon="bars"/>
        </button>
        <div class="flex absolute top-5 right-5 z-20">
            <button
                aria-label="french language"
                class="mr-5 w-10 hover:border-2 border-white" @click="lang='FR'"><img alt="french flag"
                                                                                      src="/images/fr.svg"/>
            </button>
            <button
                aria-label="english language"
                class="w-10 hover:border-2 border-white" @click="lang='EN'"><img alt="english flag"
                                                                                 src="/images/gb.svg"/>
            </button>
        </div>

        <ScrollTopButton class="px-4 py-2 rounded-full fixed bottom-10 right-5 align-center font-semibold z-50 text-neutral-100
      hover:border-2 hover:shadow-[0_0_10px_grey] border border-gray-400 mix-blend-difference
      transition duration-900 ease">{{ trad.backToTop }}
        </ScrollTopButton>

        <AppNav :close="toggleNav" :is-open="navOpen" :navigation="trad.navigation"></AppNav>
        <main id="main" :class="navOpen ? 'translate-x-96 pr-96' : ''"
              class="transform top-0 left-0 w-full ease-in-out transition-all duration-300">
            <Section id="page-infos" :dataSet="trad.infos" dark>
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
        </main>
    </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import json from './data.json';
import Section from './components/Section.vue';
import PageInfos from "./components/PageInfos.vue";
import ArticleStudies from "./components/ArticleStudies.vue";
import ArticleJobs from "./components/ArticleJobs.vue";
import ArticleProjects from "./components/ArticleProjects.vue";
import ArticleSkills from "./components/ArticleSkills.vue";
import AppNav from "./components/AppNav.vue";
import ScrollTopButton from "./components/ScrollTopButton.vue";

const navOpen = ref(false);
const lang = ref("FR");

const trad = computed(() => json[lang.value]);

function toggleNav(isOpen) {
    navOpen.value = isOpen;
}

onMounted(() => {
    function configureScript() {
        if (typeof window.configureTracker === 'function') {
            window.configureTracker(import.meta.env.VITE_TRACKER_API_KEY, import.meta.env.VITE_TRACKER_WEBSITE_ID, import.meta.env.VITE_TRACKER_URL)
        }
    }

    const trackerScript = document.createElement('script');
    trackerScript.src = "https://cdn.jsdelivr.net/gh/YohannBethoule/glimpseguru-script@master/glimpseguru.min.js";
    trackerScript.defer = true;
    trackerScript.onload = configureScript;
    document.head.appendChild(trackerScript);
});
</script>

<style>
html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}
</style>
