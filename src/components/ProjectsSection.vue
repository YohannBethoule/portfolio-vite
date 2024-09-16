<script setup>
import Article from "./Article.vue";
import SkillChip from "./SkillChip.vue";
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import Link from "./Link.vue";

const props = defineProps({
    projects: Object
})

function getImageUrl(name) {
    return new URL(`../assets/images/projects/${name}.webp`, import.meta.url).href
}
</script>

<template>
    <carousel :mouse-drag="false" class="mx-10 hidden  md:block">
        <slide v-for="project in projects.data" :key="project.title">
            <div class="flex flex-col mt-5 space-y-3 w-3/4">
                <h1 class="text-3xl">{{ project.title }}</h1>
                <h2 class="text-2xl">
                    <Link :href="project.url">{{ project.url }}</Link>
                </h2>
                <img v-if="project.imgName" :alt="project.title" :src="getImageUrl(project.imgName)"
                     class="h-96 mx-auto"/>
                <div>{{ project.short }}</div>
                <div>{{ project.long }}</div>
                <ul class="flex space-x-5 justify-center h-12">
                    <li v-for="skill in project.technos">
                        <SkillChip>{{ skill }}</SkillChip>
                    </li>
                </ul>
                <Link v-if="project.github" :href="project.github" class="text-5xl" title="Github Repository">
                    <font-awesome-icon :icon="['fab', 'github']"/>
                </Link>
            </div>

        </slide>

        <template #addons>
            <navigation/>
            <pagination/>
        </template>
    </carousel>
    <section v-for="project in projects.data" :key="project.title" class="md:hidden">
        <Article :date="project.short"
                 :title="project.title">
            <h2 class="text-lg">
                <Link :href="project.url">{{ project.url }}</Link>
            </h2>
            <img v-if="project.imgName" :alt="project.title" :src="getImageUrl(project.imgName)"
                 class="w-full my-2"/>
            <p>{{ project.long }}</p>
            <ul class="flex flex-wrap">
                <li v-for="skill in project.technos">
                    <SkillChip class="mr-3 mb-2">{{ skill }}</SkillChip>
                </li>
            </ul>
        </Article>
    </section>

</template>

<style>

.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}


.carousel__prev:hover,
.carousel__next:hover {
    color: lightgrey;
    border-color: lightgrey;
    box-shadow: 0 0 8px white;
}

.carousel__slide {
    padding: 10px;
}

.carousel__pagination-button {
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
    border: 2px solid lightgrey;
}

.carousel__pagination-button--active {
    border: 5px solid white;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

</style>
