import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyGrid from '@/components/MyGrid'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/my-grid',
      name: 'MyGrid',
      component: MyGrid
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: Todo
    }
  ]
})
