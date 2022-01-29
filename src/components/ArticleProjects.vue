<template>
    <carousel class="m-10" :mouse-drag="false">
      <slide v-for="project in projects.data" :key="project.title">
          <div class="m-10 flex flex-col space-y-5">
            <h1 class="text-3xl">{{project.title}}</h1>
            <h2 class="text-2xl"><a :href="project.url" target="_blank" class="hover:text-blue-400">{{project.url}}</a></h2>
            <img v-if="project.imgName" :src="'/images/projects/' + project.imgName + '.png'" class="w-1/2 mx-auto"/>
            <div>{{project.short}}</div>
            <div>{{project.long}}</div>
            <div class="flex space-x-5 mt-5 justify-center">
              <SkillChip v-for="skill in project.technos">{{skill}}</SkillChip>
            </div>
            <AppLink class="text-5xl m-5 hover:text-blue-400"><font-awesome-icon :icon="['fab', 'github']"/></AppLink>
          </div>

      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

</template>

<script setup>
import {projects} from "../data.json"
import AppSection from "./AppSection.vue";
import SkillChip from "./SkillChip.vue";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import AppLink from "./AppLink.vue";
const imgUrl = (name) => new URL('/images/projects/'+name+'.png', import.meta.url).href
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
