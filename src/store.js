import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Counter Vuex',
    count: 0
  },
  getters: {
    counter: state => {
        return state.count
    }
  },
  mutations: {
    INCREMENT: (state) => {
        state.count ++;
    }
  },
  actions: {
    increment: (context) => {
        context.commit('INCREMENT')
    }
  },
});
