<template>
  <div class="DemoView">
    <div class="m-header"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "DemoView",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.DemoView {
  .m-header {
    height: 64px;
    background: #1d1e23;
  }
}
</style>
