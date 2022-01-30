<template>
  <aside class="transform top-0 left-0 w-screen md:w-96 bg-red-600 fixed h-screen overflow-hidden ease-in-out transition-all duration-300 z-30"
         :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
    <nav class="flex flex-col text-3xl h-full">
      <button class="ml-auto mr-3 text-5xl hover:underline hover:font-bold" @click="close()" >&times;</button>
      <ul class="flex flex-col space-y-10 px-3 justify-center my-auto">
        <li v-for="nav in navigation" :key="nav.title" class="text-center">
          <AppNavLink  @click="goTo(nav.anchor)" :icon="nav.icon">{{ nav.title }}</AppNavLink>
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
    goTo(anchor) {
      console.log(document.getElementById(anchor).scrollTop)
      window.scroll(0, document.getElementById(anchor).offsetTop);
      this.close();
    }
  },
  props: {
    isOpen: Boolean,
    close: Function,
    navigation: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
