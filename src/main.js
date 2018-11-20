import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex';
import 'vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/src/stylus/app.styl'
Vue.use(Vuetify)
Vue.config.productionTip = false
import store from './store/store'
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
