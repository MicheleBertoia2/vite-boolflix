
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

        <div class="mb-card col-2">
          <h4>titolo</h4>
          <h4>titolo originale</h4>
          <h4>lingua</h4>
          <h4>voto</h4>
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