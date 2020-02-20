import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail : ''
  },
  mutations: {
    setUserEmail(state,payload){
      state.userEmail = payload.newEmail;
      console.log(`new email ${payload.newEmail}`);
    }
  },
  actions: {
  },
  modules: {
  }
})
