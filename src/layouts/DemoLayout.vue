<template>
  <div class="DemoLayout">
    <div class="title">
      {{title}}
    </div>
    <div class="content main">
      <div class="content-title">内容</div>
      <slot/>
    </div>
    <div class="code">
      <div class="content">
        <div class="content-title mb0">代码</div>
        <div class="content-code">
          <div class="part html">
            <span>HTML</span>

            <highlight-code lang="html">
              {{html}}
            </highlight-code>
          </div>
          <div class="part">
            <span>CSS</span>
            <highlight-code lang="scss">
              {{css}}
            </highlight-code>
          </div>
          <div v-if="javascript" class="part">
            <span>JavaScript</span>
            <pre class="">JavaScript</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoLayout",
  props: {
    title: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    },
    javascript: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.DemoLayout {
  .title {
    height: 48px;
    background: #515a6e;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    padding-left: 16px;

    &.main {
      min-height: 300px;
    }
    &-title {
      padding-left: 16px;
      margin-left: -16px;
      margin-bottom: 16px;
      background: #f0f3f9;
      color: #4e4e4e;
      height: 37px;
      display: flex;
      align-items: center;
      &.mb0 {
        margin-bottom: 0;
      }
    }
    &-code {
      display: flex;
      .part {
        padding: 16px;
        flex: 1;
      }
      .part + .part {
        border-left: 1px solid #f0f0f0;
      }
    }
  }
}
</style>
