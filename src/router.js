import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Sport from './views/Sport.vue';
import Tournaments from './views/Tournaments.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sport/:name',
      name: 'Sport',
      component: Sport,
      children: [
         {
           path: 'tournaments',
           name: 'Tournaments',
           component: Tournaments
         }

       ]
    }
  ]
})
