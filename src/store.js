import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listeNote: JSON.parse(localStorage.getItem('listeNote')) || [],
  },
  mutations: {
    // ajoute une note à la liste
    addNote: (state, note) => {
      let color = '#FFFFFF'
      if (note.categorie=="Surgele")
      {
        color = "#C1E1EF";
      } else if (note.categorie=="Frais") {
        color = "#66F49E";
      }
      state.listeNote.push({
        enonce: note.enonce,
        categorie: note.categorie,
        color: color
      })
      localStorage.setItem('listeNote', JSON.stringify(state.listeNote))
    },
    // enleve une note de la liste
    removeNote: (state, item) => {
      state.listeNote = state.listeNote.filter(function(Element) {
        return Element.enonce != item.enonce
      })
      localStorage.setItem('listeNote', JSON.stringify(state.listeNote))
    }
  },
  actions: {
    saveListeNote(context, note) {
      context.commit('addNote', note)
    }
  },
  getters: {
    listeNote: state => state.listeNote
  }
})
