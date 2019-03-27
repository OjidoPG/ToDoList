<template>
  <div>
    <div class="row ligneTest" v-for="note in listeNote" :key="note.enonce">
    <div class="col-md-2 LigneListe" v-bind:style="{ backgroundColor: note.color }">
      {{note.categorie}}
    </div>
    <div class="col-md-8 LigneListe">
      {{note.enonce}}
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-outline-danger btn-sm" @click="SuppressionItem(note)">Supprimer</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Notes',
  computed: {
    listeNote: function () {
      return this.$store.getters.listeNote
    }
  },
  methods:{
    SuppressionItem : function(note) {
      this.$store.commit('removeNote', note)
    }
  }
}
</script>
