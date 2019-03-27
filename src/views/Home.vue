<template>
  <div class="container">
    <form name="myForm" method="post" v-on:submit="AjoutNoteAListe" class="form-group rowTop">
      <div class="row rowTop">
        <div class="col-md-2 offset-3 form-group" align="center">
          <select class="form-control" v-model="Note.categorie">
            <option value="Autre" selected>Autre</option>
            <option value="Frais">Frais</option>
            <option value="Surgele">Surgelé</option>
          </select>
        </div>
        <div class="col-md-3 offset-1">
          <input type="text" class="form-control" v-model="Note.enonce"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 rowTop">
          <input type="submit" class="btn btn-outline-info" value="Mémoriser"/>
        </div>
      </div>
    </form>
    <div class="row rowTop"></div>
    <div class="row">
      <div class="col-md-6 offset-3">

        <!-- Injection de Notes.vue -->
        <Notes/>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from '@/components/Notes.vue'
export default {
  name: 'home',
  components: {
    Notes
  },
  data: function () {
    return {
      Note: {
        categorie: '',
        enonce: ''
      }
    }
  },
  methods: {
    AjoutNoteAListe: function(event) {
      event.preventDefault();
      this.$store.dispatch('saveListeNote', this.Note)
      this.Note.categorie = ''
      this.Note.enonce=''
      this.Note = {
        categorie: '',
        enonce: ''
      }
    }
  }
}
</script>

<style>
.rowTop{
  padding-top: 30px;
}
</style>
