<template>
  <div class="page">
    <div class="page-nav">
      <Nav/>
    </div>
    <div class="page-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
  Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
  sans-serif;
  font-size: 16px;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;

  &-nav {
    height: 100vh;
    background: #515a6e;
  }

  &-content {
    flex: 1;
  }
}
</style>
