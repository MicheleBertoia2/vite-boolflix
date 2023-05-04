
<script>
import {store} from "../data/store"
export default {
  name: "Main",
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="mb-main">
    <div class="container">
      <div class="row">
        <div class="col text-center" v-if="store.filmArray.length === 0"> Non ci sono risultati</div>
        <div
          class="mb-card col-2"
          v-else
          v-for="film in store.filmArray" :key="film.id">
          <h4>{{ film.title }}</h4>
          <h4>{{ film.original_title }}</h4>
          <h4>Lingua: {{ film.original_language }}</h4>
          <h4>Voto: {{ film.vote_average }}</h4>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .mb-main{
    height: calc(100vh - 100px);
    color: darken(white, 20%);
    background-color: lighten(black, 35%);
    overflow-y: scroll;
    .mb-card{
      /*debug*/
      border: 1px solid white;
      padding: 20px;

    }
  }
</style>