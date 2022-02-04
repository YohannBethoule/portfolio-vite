<template>
  <div class="flex flex-col border border-gray p-2 rounded overflow-hidden shadow-lg text-center
    w-2/5 h-22 md:w-48 md:h-32
    hover:shadow-2xl">
    <img v-if="image" :alt="name" :src="'/skills/' + image" class="h-6 md:h-10 mx-auto mt-3 md:mt-5">
    <div class=" my-auto font-bold  md:text-xl">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSkillCard",
  props: {
    name: String,
    image: String
  }
}
</script>

<style scoped>

</style>
