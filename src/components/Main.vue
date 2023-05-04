
<script>
import {store} from "../data/store";
import FilmCard from './partials/FilmCard.vue';
export default {
  name: "Main",
  components:{
    FilmCard,
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

        <div class="col text-center" v-if="store.filmArray.length === 0"> Non ci sono risultati</div>

        <div class="mb-cards-container row" v-else>
          <FilmCard v-for="film in store.filmArray" :key="film.id" :filmObj="film"/>        

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