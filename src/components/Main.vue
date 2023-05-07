
<script>
import {store} from "../data/store";
import ShowCard from "./partials/ShowCard.vue";
export default {
  name: "Main",
  components:{
    ShowCard,
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
            <ShowCard v-for="film in store.filmArray" :key="film.id" :showObj="film"/>   
          </div>
          <div class="tv row" v-show="store.tvArray.length > 0">
            <h2>Serie TV</h2>
            <ShowCard v-for="tv in store.tvArray" :key="tv.id" :showObj="tv"/>   
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