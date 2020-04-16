// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// passive
// import 'default-passive-events'
import Installer from '@/plugins/installer'
// 引入插件
import MintUi from 'mint-ui'
// 引入全局样式
import '../static/static/css/globle.css'
// 项目中样式文件需要单独引入。引入css
import 'mint-ui/lib/style.css'
// 定义全局过滤器
import Moment from 'moment'

// 项目中引入axios
import Axios from 'axios'
import MyUl from './components/common/MyUl'
import MyLi from './components/common/MyLi'
import NavBar from './components/common/NavBar'
Vue.config.productionTip = false

// 安装插件
Vue.use(MintUi)
Vue.use(Installer)
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
// 在vue原型上挂载$axios属性，设置
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = 'https://www.qingshanyun.cn/api/open-api/'

Vue.filter('convertTime', function (data, format) {
  return Moment(data).format(format)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
