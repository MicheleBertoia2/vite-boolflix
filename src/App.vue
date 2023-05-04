
<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

import {store} from "./data/store";
export default {
  name: "App",
  components: {
    Header,
    Main,
  },

  data(){
    return{
      store,
    }
  },

  mounted(){
  }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
  @use "./scss/main.scss"

</style>