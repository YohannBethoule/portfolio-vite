<template>
  <carousel :mouse-drag="false" class="mx-10 hidden  md:block">
    <slide v-for="project in projects.data" :key="project.title">
      <div class="flex flex-col mt-5 space-y-3 w-3/4">
        <h1 class="text-3xl">{{ project.title }}</h1>
        <h2 class="text-2xl">
          <AppLink :href="project.url">{{ project.url }}</AppLink>
        </h2>
        <img v-if="project.imgName" :alt="project.title" :src="'/images/projects/' + project.imgName + '.webp'"
             class="h-96 mx-auto"/>
        <div>{{ project.short }}</div>
        <div>{{ project.long }}</div>
        <div class="flex space-x-5 justify-center h-12">
          <SkillChip v-for="skill in project.technos">{{ skill }}</SkillChip>
        </div>
        <AppLink v-if="project.github" :href="project.github" class="text-5xl" title="Github Repository">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </AppLink>
      </div>

    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  <section  v-for="project in projects.data" :key="project.title" class="md:hidden">
    <AppSection :title="project.title"
                :date="project.short">
      <h2 class="text-lg">
        <AppLink :href="project.url">{{ project.url }}</AppLink>
      </h2>
      <img v-if="project.imgName" :alt="project.title" :src="'/images/projects/' + project.imgName + '.webp'"
           class="w-full my-2"/>
      <div>{{ project.long }}</div>
      <div class="flex flex-wrap mt-5">
        <SkillChip v-for="skill in project.technos" class="mr-5 mb-5">{{ skill }}</SkillChip>
      </div>
    </AppSection>
  </section>

</template>

<script setup>
import AppSection from "./AppSection.vue";
import SkillChip from "./SkillChip.vue";
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import AppLink from "./AppLink.vue";

const props = defineProps({
  projects: Object
})
</script>

<style>

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}


.carousel__prev:hover,
.carousel__next:hover {
  color:lightgrey;
  border-color:lightgrey;
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
