<template>
  <div class="demo-box">
    <DemoLayout title="和文字平起平坐的表格"
                :html="html"
                :css="css">
      和文字平起平坐的表格:
      <div class="inline-table">
        <p>第一列</p>
        <p>第二列</p>
      </div>
    </DemoLayout>
  </div>
</template>

<script>
import DemoLayout from '../layouts/DemoLayout'

export default {
  components: {
    DemoLayout
  },
  data() {
    return {
      html: `
     和文字平起平坐的表格:
      <div class="inline-table">
        <p>第一列</p>
        <p>第二列</p>
      </div>
      `,
      css: `
  .inline-table {
    display: inline-table;
    width: 128px;
    margin-left: 10px;
    border: 1px solid #cad5eb;

    p {
      display: table-cell;
      text-align: center;
    }
  }
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-box {
  .inline-table {
    display: inline-table;
    width: 128px;
    margin-left: 10px;
    border: 1px solid #cad5eb;

    p {
      display: table-cell;
      text-align: center;
    }
  }
}
</style>
