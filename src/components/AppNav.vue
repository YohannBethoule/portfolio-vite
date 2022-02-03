<template>
  <aside class="transform top-0 left-0 w-screen md:w-96 bg-red-600 fixed h-screen overflow-hidden ease-in-out transition-all duration-300 z-30"
         :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
    <nav class="flex flex-col text-3xl h-full">
      <button class="ml-auto mr-3 text-5xl hover:underline hover:font-bold" @click="close()" >&times;</button>
      <ul class="flex flex-col space-y-10 px-3 justify-center my-auto">
        <li v-for="nav in navigation" :key="nav.title" class="text-center">
          <AppNavLink :href="'#'+nav.anchor" :icon="nav.icon" @click="close()">{{ nav.title }}</AppNavLink>
          <!--          :href="'#'+nav.anchor"-->
          <!--          <AppNavLink  @click="close()" :icon="nav.icon">{{ nav.title }}</AppNavLink>-->
        </li>
      </ul>
    </nav>
  </aside>

</template>

<script>
import AppNavLink from "./AppNavLink.vue";

export default {
  name: "AppNav",
  components: {AppNavLink},
  methods: {
    closeDelay(delay, anchor) {
      this.close()
      // window.scrollTo(0,document.getElementById('page-projects').offsetTop)
      // if(anchor=='page-projects') return;
      window.scrollTo(0, document.getElementById(anchor).offsetTop)
    }
  },
  props: {
    isOpen: Boolean,
    close: Function,
    navigation: Array
  },
  data() {
    return {
      offsets: {
        "page-studies": 0,
        "page-projects": 0,
        "page-jobs": 0,
        "page-infos": 0,
        "page-skills": 0,
      }
    }
  },
  mounted() {
    for (let anchor of Object.keys(this.offsets)) {
      this.offsets[anchor] = document.getElementById(anchor).offsetTop;
    }
  }
}
</script>

<style scoped>

</style>
