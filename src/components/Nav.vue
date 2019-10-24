<template>
  <Menu theme="dark">
    <MenuGroup title="第三章">
      <MenuItem name="1">
        <Icon type="md-document"/>
        <router-link to="/inline-table">和文字平起平坐的表格</router-link>
      </MenuItem>
      <MenuItem name="2">
        <Icon type="md-chatbubbles"/>
        评论管理
      </MenuItem>
    </MenuGroup>
    <MenuGroup title="统计分析">
      <MenuItem name="3">
        <Icon type="md-heart"/>
        用户留存
      </MenuItem>
      <MenuItem name="4">
        <Icon type="md-leaf"/>
        流失用户
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>
