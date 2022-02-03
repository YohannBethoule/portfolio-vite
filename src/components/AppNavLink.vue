<template>
  <a class="hover:font-bold hover:underline whitespace-normal">
    <font-awesome-icon :icon="icon" class="mr-2"/>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "AppNavLink",
  props: {
    icon: String
  }
}
</script>

<style scoped>

</style>
