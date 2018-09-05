import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [
    'Note 1',
    'Note 2',
    'Note 3'
  ]
}

const getters = {
  notes: state => state.notes
}

const actions = {
  loasNotes (context) {
    context.commit('loadNotes')
  },
  addNote (context, note) {
    context.commit('addNote', note)
  },
  editNote (context, note) {
    context.commit('editNote', note)
  },
  removeNote (context, note) {
    context.commit('removeNote')
  }
}

const mutations = {
  loadNotes (state) {

  },
  addNote (state, note) {
    state.notes.push(note)
  },
  editNote (state, note) {
    state.notes[note.index] = note.text
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
