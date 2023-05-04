
<script>
export default {
  name: "FilmCard",
  props:{
    filmObj: Object
  },
  methods:{
    getImage(img){
      return new URL(img,import.meta.url).href
    },
  }
}
</script>

<template>
          <div
            class="mb-card col-2"
            >
            <h4>{{ filmObj.title }}</h4>
            <h4>{{ filmObj.original_title }}</h4>
            <img
              v-if="filmObj.original_language ==='en' "
              :src="getImage(`../../assets/img/en.png`)"
              :alt="filmObj.original_language">
            <img
              v-else-if="filmObj.original_language ==='it' "
              :src="getImage(`../../assets/img/it.png`)"
              :alt="filmObj.original_language">
            <h4 v-else>Lingua: {{ filmObj.original_language }}</h4>
            <h4>Voto: {{ filmObj.vote_average }}</h4>
          </div>
  
</template>

<style lang="scss" scoped>
  .mb-card{
      /*debug*/
      border: 1px solid white;
      padding: 20px;
      img{
        height: 20px;
        width: 30px;
      }
    }
</style>