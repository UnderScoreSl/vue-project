import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/member/Member'
import Shopcart from '@/components/shopcart/Shopcart'
import Search from '@/components/search/Search'
import NewsList from '@/components/news/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/news',
      name: 'NewsList',
      component: NewsList
    }
  ]
})
