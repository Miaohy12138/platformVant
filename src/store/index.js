import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:'',
    visitpersonId:0,
    visitpersonName:''
  },
  mutations: {
    setUserId(state,userId){
      state.userId = userId
    },
    setVisitpersonId(state,id){
      state.visitpersonId = id
    },
    setVisitpersonName(state,name){
      state.visitpersonName = name;
    }
  },
  getters:{
    getUserId:state => state.userId,
    getVisitperonId:state => state.visitpersonId,
    getVisitpersonName:state => state.visitpersonName
  },
  actions: {
  },
  modules: {
  }
})
