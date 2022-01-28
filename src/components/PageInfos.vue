<template>
  <div class="flex flex-col mx-auto text-center space-y-5">
    <h1 class="text-9xl font-bold"> {{infos.name}}  </h1>
    <h2 class="text-5xl font-bold">{{infos.subtitle}}</h2>
    <div class="flex flex-col text-3xl space-y-2">
      <h3>
        <a :href="'mailto:'+infos.mail" class="hover:text-blue-400">
          <font-awesome-icon icon="envelope" class="mr-2"/>{{infos.mail}}
        </a>
      </h3>
      <h3><font-awesome-icon icon="phone" class="mr-2"/>{{infos.phone}}</h3>
      <h3><font-awesome-icon icon="home" class="mr-2"/>{{infos.postalCode}} {{infos.city}}, {{infos.country.toUpperCase()}}</h3>
      <h3>
        <a :href="infos.github" target="_blank" class="text-5xl m-5 hover:text-blue-400"><font-awesome-icon :icon="['fab', 'github']"/></a>
        <a :href="infos.linkedin" target="_blank" class="text-5xl m-5 hover:text-blue-400"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
      </h3>
    </div>
<!--    <p class="text-3xl">{{infos.description}}</p>-->
  </div>

</template>

<script setup>
import {infos} from "../data.json"
</script>

<style scoped>

</style>
