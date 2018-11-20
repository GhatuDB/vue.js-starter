import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [{
        name: 'John Smith',
        phone: '+919088776655'
      }
    ]
  },
  mutations
});