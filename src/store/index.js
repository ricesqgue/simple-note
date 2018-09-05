import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: []
}

const getters = {
  notes: state => state.notes
}

const actions = {
  loasNotes (context) {
    context.commit('loadNotes')
  },
  addNote (context, note) {
    context.commit('addNote')
  },
  editNote (context, note) {
    context.commit('editNote')
  },
  removeNote (context, note) {
    context.commit('removeNote')
  }
}

const mutations = {
  loadNotes (state) {

  },
  addNote (state) {

  },
  editNote (state) {

  },
  removeNote (state) {

  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
