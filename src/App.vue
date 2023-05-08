
<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Loader from './components/partials/Loader.vue';

import {store} from "./data/store";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Loader
  },

  data(){
    return{
      store,
    }
  },

  mounted(){
    store.getPopularApi()
  }
}
</script>

<template>
  <Header />
  <Loader v-if="store.isLoading"/>
  <Main v-else />
</template>

<style lang="scss">
  @use "./scss/main.scss"

</style>