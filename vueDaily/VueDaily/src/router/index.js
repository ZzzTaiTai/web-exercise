import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailedPage from '@/components/DetailedPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/details/:NewsId',
      name: 'Details',
      component: DetailedPage
    }
  ]
})
