<template>
  <div>
    <mt-header title="信息管理系统"></mt-header>
    <router-view />
    {{selected}}
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="../static/static/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img slot="icon" src="../static/static/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="../static/static/img/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected: function (newV, oldV) {
      // 这里不能用箭头函数
      // console.log(newV, oldV)
      // console.log(this) // 组件对象
      this.$router.push({
        name: newV || '/'
      }, onComplete => {}, onAbort => {})
    }
  }
}
</script>
<style scoped>
.mint-tabbar {
  position: fixed;
  bottom: 0;
}
</style>
