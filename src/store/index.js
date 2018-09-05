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
  loadNotes (context) {
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
    var notes = window.localStorage.getItem('myNotes')
    state.notes = (notes !== null) ? JSON.parse(notes) : []
  },
  addNote (state, note) {
    state.notes.push(note)
    saveOnLocalStorage()
  },
  editNote (state, note) {
    state.notes[note.index] = note.text
    saveOnLocalStorage()
  },
  removeNote (state, index) {
    state.notes.splice(index, 1)
    saveOnLocalStorage()
  }
}

var saveOnLocalStorage = function () {
  window.localStorage.setItem('myNotes', JSON.stringify(state.notes))
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
