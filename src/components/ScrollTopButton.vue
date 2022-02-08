<template>
  <button v-show="visible" @click="backToTop()">
    <font-awesome-icon icon="arrow-up"></font-awesome-icon>
    Back to top
  </button>
</template>

<script>
export default {
  name: "ScrollTopButton",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style scoped>

</style>
