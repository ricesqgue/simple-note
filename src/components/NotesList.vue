<template>
  <v-container>
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title class="title">My Notes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon color="success" fab small @click="openNewNoteDialog()">
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-list>
          <v-list-tile v-for="(note, index) in notes" :key="note + index">
            <v-list-tile-content>
              <v-list-tile-title >{{ note | fixLenght }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn small icon @click="openEditNoteDialog(note, index)">
                <v-icon>edit</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-btn small icon @click="removeNote(index)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <p v-if="notes !== null && notes.length === 0">
            Nothing to show
          </p>
        </v-list>
      </v-card-text>
    </v-card>

    <v-dialog v-model="isNewNoteDialogOpen" max-width="1000px">
      <v-card>
        <v-form v-model="newNoteValid" ref="newNoteForm">
          <v-card-title>
            <h2>Add new note</h2>
          </v-card-title>
          <v-card-text>
            <v-textarea required :rules="[(v) => !!v || 'Note cannot be empty']" v-model="newNote"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small color="default" @click="isNewNoteDialogOpen = false">Close</v-btn>
            <v-btn small color="success" :disabled="!newNoteValid" @click="saveNewNote()">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isEditNoteDialogOpen" max-width="1000px">
      <v-card>
        <v-form v-model="editNoteValid" ref="editNoteForm">
          <v-card-title>
            <h2>Edit note</h2>
          </v-card-title>
          <v-card-text>
            <v-textarea required :rules="[(v) => !!v || 'Note cannot be empty']" v-model="noteSelected.text"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small color="default" @click="isEditNoteDialogOpen = false">Close</v-btn>
            <v-btn small color="success" :disabled="!editNoteValid" @click="saveEditNote">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NotesList',
  data: () => ({
    isNewNoteDialogOpen: false,
    isEditNoteDialogOpen: false,
    newNoteValid: null,
    editNoteValid: null,
    newNote: '',
    noteSelected: {}
  }),
  computed: {
    ...mapGetters(['notes'])
  },
  filters: {
    fixLenght (val) {
      if (val.length > 80) {
        return `${val.substring(0, 75)} ...`
      }
      return val
    }
  },
  methods: {
    ...mapActions(['addNote', 'editNote', 'removeNote', 'loadNotes']),
    openNewNoteDialog () {
      this.newNote = ''
      this.isNewNoteDialogOpen = true
    },
    openEditNoteDialog (note, index) {
      this.isEditNoteDialogOpen = true
      this.noteSelected.text = note
      this.noteSelected.index = index
    },
    saveNewNote () {
      this.addNote(this.newNote)
      this.isNewNoteDialogOpen = false
    },
    saveEditNote () {
      this.editNote(this.noteSelected)
      this.isEditNoteDialogOpen = false
    }
  },
  beforeMount () {
    this.loadNotes()
  }
}
</script>
