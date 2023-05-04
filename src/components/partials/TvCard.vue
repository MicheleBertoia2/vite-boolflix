
<script>
export default {
  name: "TvCard",
  props:{
    tvObj: Object
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
            <h4>{{ tvObj.name }}</h4>
            
            <h4>{{ tvObj.original_name }}</h4>

            <div class="lang-box">
              <img
                v-if="tvObj.original_language ==='en' "
                :src="getImage(`../../assets/img/en.png`)"
                :alt="tvObj.original_language">
              <img
                v-else-if="tvObj.original_language ==='it' "
                :src="getImage(`../../assets/img/it.png`)"
                :alt="tvObj.original_language">
              <img
                v-else-if="tvObj.original_language ==='de' "
                :src="getImage(`../../assets/img/de.webp`)"
                :alt="tvObj.original_language">
              <img
                v-else-if="tvObj.original_language ==='fr' "
                :src="getImage(`../../assets/img/fr.png`)"
                :alt="tvObj.original_language">
              <img
                v-else-if="tvObj.original_language ==='es' "
                :src="getImage(`../../assets/img/es.webp`)"
                :alt="tvObj.original_language">
              <img
                v-else-if="tvObj.original_language ==='ja' "
                :src="getImage(`../../assets/img/jp.png`)"
                :alt="tvObj.original_language">
              <h4 v-else>Lingua: {{ tvObj.original_language }}</h4>
            </div>

            <h4>Voto: {{ tvObj.vote_average }}</h4>
          </div>
  
</template>

<style lang="scss" scoped>
  .mb-card{
      /*debug*/
      border: 1px solid white;
      padding: 20px;
      .lang-box{
          img{
          height: 20px;
          width: 30px;
        }
      }
      
    }
</style>