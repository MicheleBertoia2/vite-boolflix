
<script>
import {store} from "../data/store";
import FilmCard from './partials/FilmCard.vue';
import TvCard from "./partials/TvCard.vue";
export default {
  name: "Main",
  components:{
    FilmCard,
    TvCard,
  },

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

        <div class="col text-center" v-if="store.filmArray.length === 0 && store.tvArray.length === 0"> Non ci sono risultati</div>

        <div class="mb-shows-container" v-else>
          <div class="films row" v-show ="store.filmArray.length > 0">
            <h2>Film {{ store.categorie }}</h2>
            <FilmCard v-for="film in store.filmArray" :key="film.id" :filmObj="film"/>   
          </div>
          <div class="tv row" v-show="store.tvArray.length > 0">
            <h2>Serie TV</h2>
            <TvCard v-for="tv in store.tvArray" :key="tv.id" :tvObj="tv"/>   
          </div>

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
    
  }
</style>