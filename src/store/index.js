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
  removeNote (context, index) {
    context.commit('removeNote', index)
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
  removeNote (state, index) {
    state.notes.splice(index, 1)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
