import Vue from 'vue'
import Router from 'vue-router'
import search from '@/page/search'
import result from '@/page/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: search
    },{
      path:'/search/:query',
      name: 'result',
      component: result
    },{
      path:'/search/',
      redirect:'/'
    }
  ]
})
