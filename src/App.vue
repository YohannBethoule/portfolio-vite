<script setup>
import {computed, onMounted, ref} from 'vue';
import json from './assets/data.json';
import Section from './components/Section.vue';
import HeroSection from "./components/HeroSection.vue";
import JobsSection from "./components/JobsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import AppNav from "./components/AsideNav.vue";
import ScrollTopButton from "./components/ScrollTopButton.vue";
import LangBtn from "./components/LangBtn.vue";
import imgLangFr from "./assets/images/fr.svg";
import imgLangEn from "./assets/images/gb.svg";

const navOpen = ref(false);
const lang = ref("FR");

const trad = computed(() => json[lang.value]);

function toggleNav(isOpen) {
    navOpen.value = isOpen;
}

const setLanguage = (language) => {
    lang.value = language;
};

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

<template>
    <div class="flex scroll-smooth">
        <button
            aria-label="open menu"
            class="fixed top-5 left-5 text-3xl text-[#D50000] z-20"
            @click="toggleNav(true)">
            <font-awesome-icon icon="bars"/>
        </button>
        <div class="flex absolute top-5 right-5 z-20">
            <LangBtn
                :imageSrc="imgLangFr"
                altText="french flag"
                ariaLabel="french language"
                class="mr-5"
                lang="FR"
                @changeLanguage="setLanguage"
            />
            <LangBtn
                :imageSrc="imgLangEn"
                altText="english flag"
                ariaLabel="english language"
                lang="EN"
                @changeLanguage="setLanguage"
            />
        </div>
        <ScrollTopButton>{{ trad.backToTop }}</ScrollTopButton>

        <AppNav :close="toggleNav" :is-open="navOpen" :navigation="trad.navigation"></AppNav>
        <main id="main" :class="navOpen ? 'translate-x-96 pr-96' : ''"
              class="transform top-0 left-0 w-full ease-in-out transition-all duration-300">
            <Section id="page-infos" :dataSet="trad.infos" dark>
                <HeroSection :infos="trad.infos"></HeroSection>
            </Section>
            <Section id="page-skills" :dataSet="trad.skills">
                <SkillsSection :skills="trad.skills"/>
            </Section>
            <Section id="page-projects" :dataSet="trad.projects" dark>
                <ProjectsSection :projects="trad.projects"/>
            </Section>
            <Section id="page-jobs" :dataSet="trad.jobs">
                <JobsSection :jobs="trad.jobs"/>
            </Section>
        </main>
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}
</style>
