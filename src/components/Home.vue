<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.imgPath" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <test />
  <!-- 九宫格 -->
    <div class="grid">
      <my-ul>
        <my-li v-for="(mac, index) in macs" :key="index">
          <router-link :to="mac.route">
            <span :class="mac.className"></span>
            <div>{{mac.title}}</div>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs: [],
      macs: [
        {title: '新闻咨询', className: 'back-news', route: {name: 'NewsList'}},
        {title: '图文分享', className: 'back-pic', route: {name: 'Home'}},
        {title: '商品展示', className: 'back-goods', route: {name: 'Home'}},
        {title: '留言反馈', className: 'back-feed', route: {name: 'Home'}},
        {title: '搜索咨询', className: 'back-search', route: {name: 'Home'}},
        {title: '联系我们', className: 'back-callme', route: {name: 'Home'}}
      ]
    }
  },
  created () {
    // this.$log()
    // this.$log = 'aaaabbb'
    this.$log = 'aaaabbb'
    this.$log()
    this.$axios.get('https://www.qingshanyun.cn/api/open-api/banners')
      .then(res => {
        // console.log(res.data.data) //对象的数组, 用imgs接收数据
        this.imgs = res.data.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    width: 100%;
    height: 200px;
  }
  .mint-swipe-item img{
    width: 100%;
    height: 200px;
  }
  .grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
  }
  .back-news {
    background-image: url("../../static/static/img/news.png")
  }
  .back-pic {
    background-image: url("../../static/static/img/picShare.png")
  }
  .back-goods {
    background-image: url("../../static/static/img/goodsShow.png")
  }
  .back-feed {
    background-image: url("../../static/static/img/feedback.png")
  }
  .back-search {
    background-image: url("../../static/static/img/search.png")
  }
  .back-callme {
    background-image: url("../../static/static/img/callme.png")
  }
</style>
