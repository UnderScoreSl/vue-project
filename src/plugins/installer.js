/*
 * @Author: your name
 * @Date: 2020-03-19 15:39:08
 * @LastEditTime: 2020-04-08 22:41:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-webpack\test-project\src\plugins\installs.js
 */

// vue 插件必须需要install函数
function Installer () {
  // 自身初始化行为
}

Installer.install = function (Vue) {
  // 接收Vue的构造函数, 给原型挂载属性或注册全局组件或过滤器
  // console.log(Vue)
  // 1.注册全局组件
  Vue.component('test', {
    template: `<h1>哈哈哈</h1>`
  })
  // 2.挂载属性
  // 子类对象是可以修改父类的属性的
  // Vue.prototype.$log = function () {
  //   console.log('hhhhhhahhhha')
  // }
  // 给原型定义属性的获取和设置
  let log = function () {
    console.log('我们自己的log插件')
  }
  Object.defineProperty(Vue.prototype, '$log', {
    // 设置$log属性时的行为
    set: function (newV) {
      console.log('你做梦')
      // log = newV
    },
    get: function () {
      // 获取的方式
      return log
    }
  })
}

export default Installer
