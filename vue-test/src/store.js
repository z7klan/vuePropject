import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listContent: []
  },  
  mutations: {
    storageCotent(state, value) {
      //默认第一个参数为state
      state.listContent.unshift(value);
    }
  },
  actions: {}
});
