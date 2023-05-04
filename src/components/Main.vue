
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
      filmz
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .mb-main{
    height: calc(100vh - 100px);
    color: darken(white, 20%);
    background-color: lighten(black, 35%);
  }
</style>