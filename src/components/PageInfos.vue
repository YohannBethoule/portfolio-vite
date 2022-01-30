<template>
  <div class="flex flex-col mx-auto text-center space-y-5">
    <h1 class="text-5xl md:text-9xl font-bold"> {{infos.name}}</h1>
    <AppH2>{{infos.subtitle}}</AppH2>
    <div class="flex flex-col space-y-2">
      <AppH3>
        <AppLink :href="'mailto:'+infos.mail">
          <font-awesome-icon icon="envelope" class="mr-2"/>{{infos.mail}}
        </AppLink>
      </AppH3>
      <AppH3><font-awesome-icon icon="phone" class="mr-2"/>{{infos.phone}}</AppH3>
      <AppH3><font-awesome-icon icon="home" class="mr-2"/>{{infos.postalCode}} {{infos.city}}, {{infos.country.toUpperCase()}}</AppH3>
      <AppH3>
        <AppLink :href="infos.github" class="text-5xl m-5"><font-awesome-icon :icon="['fab', 'github']"/></AppLink>
        <AppLink :href="infos.linkedin" class="text-5xl m-5"><font-awesome-icon :icon="['fab', 'linkedin']"/></AppLink>
      </AppH3>
    </div>
<!--    <p class="text-3xl">{{infos.description}}</p>-->
  </div>

</template>

<script setup>
import AppH1 from "./AppH1.vue";
import AppH2 from "./AppH2.vue";
import AppH3 from "./AppH3.vue";
import AppLink from "./AppLink.vue";

const props = defineProps({
  infos: Object
})
</script>

<style scoped>

</style>
