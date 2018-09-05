<template>
  <v-container>
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title class="title">My Notes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon color="success" fab small>
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-list>
          <v-list-tile v-for="note in notes" :key="note.id">
            <v-list-tile-content>
              <v-list-tile-title v-text="note.text"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon>
                <v-icon>edit</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'NotesList',
  data: () => ({
  }),
  computed: {
    ...mapGetters(['notes'])
  }
}
</script>
