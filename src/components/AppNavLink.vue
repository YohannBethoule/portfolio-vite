<template>
  <button class="hover:font-bold hover:underline text-left whitespace-normal"><font-awesome-icon class="mr-2" :icon="icon"/><slot></slot></button>
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
