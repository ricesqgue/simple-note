import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '@/components/NotesList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NotesList',
      component: NotesList
    }
  ]
})
