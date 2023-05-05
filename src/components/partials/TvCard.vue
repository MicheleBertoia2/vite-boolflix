
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
    }
  },
  props:{
    tvObj: Object
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

    }
  },
  
}
</script>

<template>
          <div
            class="mb-card mb-1 me-2"
            >
            <img class="mb-cover" :src="store.basicImgUrl + tvObj.poster_path" :alt="tvObj.name">

            <div class="tv-info">
              
                          <h4>{{ tvObj.name }}</h4>
                          
              
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
                          <div class="votebox">
                            {{ getStars((Math.round(tvObj.vote_average)/2).toFixed(1)) }}
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