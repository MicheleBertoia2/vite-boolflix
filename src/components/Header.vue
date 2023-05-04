
<script>
import {store} from "../data/store"
export default {
  name: "Header",
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center">

    <img src="/logo-boolflix.png" alt="logo">

    <div class="search-bar d-flex">
      <input
        type="text"
        class="form-control"
        :placeholder="store.srcPlaceholder"
        v-model="store.queryParamStr"
        @keyup.enter="store.getMovieApi()">

      <button
        class="btn btn-danger mx-3"
        @click="store.getMovieApi()">Cerca</button>
    </div>

  </header>
</template>

<style lang="scss" scoped>
  header{
    height: 100px;
    background-image: linear-gradient(black, lighten(black,35%));
    padding: 20px;
    input{
      width: 350px;
    }
  }
</style>