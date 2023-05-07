
<script>
import {store} from "../../data/store";
export default {
  name: "TvCard",
  data(){
    return{
      store,
      isHalf: false,
      fullStars: [],
      emptyStars: [],
      posterUrl: store.basicImgUrl + this.showObj.poster_path,
    }
  },
  props:{
    showObj: Object
  },
  methods:{
    getImage(img){
      return new URL(img,import.meta.url).href
    },
    getStars(rating){
      let rest = rating;
      for(let i =rating; i >= 1; i--){
        this.fullStars.push('f')
        rest--
      }
      if(rest == 0.5){
        this.isHalf = true
      }

      for(let i = 5 - rating; i>= 1; i--){
        this.emptyStars.push('e')
      }

    },
    errorLoadingPoster(){
      this.posterUrl = this.getImage(`../../assets/img/poster-not-found.jpg`) 
    }
  },
  
}
</script>

<template>
          <div
            class="mb-card mb-1 me-2"
            >
            <img class="mb-cover" :src="posterUrl" @error="errorLoadingPoster" :alt="showObj.name">

            <div class="tv-info d-none">
              
                          <h4 v-if="showObj.title">{{ showObj.title }}</h4>
                          <h4 v-else>{{ showObj.name }}</h4>
                          
              
                          <div class="lang-box">
                            <img
                              v-if="showObj.original_language ==='en' "
                              :src="getImage(`../../assets/img/en.png`)"
                              :alt="showObj.original_language">
                            <img
                              v-else-if="showObj.original_language ==='it' "
                              :src="getImage(`../../assets/img/it.png`)"
                              :alt="showObj.original_language">
                            <img
                              v-else-if="showObj.original_language ==='de' "
                              :src="getImage(`../../assets/img/de.webp`)"
                              :alt="showObj.original_language">
                            <img
                              v-else-if="showObj.original_language ==='fr' "
                              :src="getImage(`../../assets/img/fr.png`)"
                              :alt="showObj.original_language">
                            <img
                              v-else-if="showObj.original_language ==='es' "
                              :src="getImage(`../../assets/img/es.webp`)"
                              :alt="showObj.original_language">
                            <img
                              v-else-if="showObj.original_language ==='ja' "
                              :src="getImage(`../../assets/img/jp.png`)"
                              :alt="showObj.original_language">
                            <h4 v-else>Lingua: {{ showObj.original_language }}</h4>
                          </div>
              
                          <h4>Voto: {{ showObj.vote_average }}</h4>
                          <div class="votebox">
                            {{ getStars((Math.round(showObj.vote_average)/2).toFixed(1)) }}
                            <i
                              v-for="index in fullStars" :key="index"
                              class="fa-solid fa-star"></i>
              
                            <i v-if="isHalf" class="fa-solid fa-star-half-stroke"></i>
                            <i
                              v-for="index in emptyStars" :key="index"
                              class="fa-regular fa-star"></i>
                          </div>

            </div>
          </div>
  
</template>

<style lang="scss" scoped>
  .mb-card{
      height: 300px;
      width: 200px;
      position: relative;
      .mb-cover{
        position: absolute;
        object-fit: cover;
        width: 100%;
      }
      .tv-info{
        position: absolute;
        z-index: 5;
        .lang-box{
          img{
          height: 20px;
          width: 30px;
        }
      }
      }
      
      
    }
</style>