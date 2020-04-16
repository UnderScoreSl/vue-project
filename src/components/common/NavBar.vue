<template>
  <div class="tmpl">
    <mt-header :title="title">
      <div @click="goback" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
    goback: function () {
      // 根据历史记录逐次返回
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.tmpl .mint-header {
  background-color: yellowgreen
}
</style>
