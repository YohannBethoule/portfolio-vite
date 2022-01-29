<template>
  <span
    :class="getClassList">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "AppH3",
  props: {
    dark: Boolean
  },
  computed: {
    getClassList: function() {
      let classes = "px-4 py-2 rounded-full flex align-center w-max font-semibold hover:border-2 transition duration-900 ease hover:shadow-[0_0_10px_grey] border border-gray-400 ";
      if (this.dark) classes += "text-gray-800";
      else classes += "text-gray-300"
      return classes;
    }
  }
}
</script>

<style scoped>

</style>
