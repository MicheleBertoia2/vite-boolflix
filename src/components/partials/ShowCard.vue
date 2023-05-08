
<script>
import {store} from "../../data/store";
export default {
  name: "TvCard",
  data(){
    return{
      store,
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
   
    errorLoadingPoster(){
      this.posterUrl = this.getImage(`../../assets/img/poster-not-found.jpg`) 
    }
  },
  computed:{
    starRangeModifier(){
      let range = ((Math.round(this.showObj.vote_average)/2).toFixed(1) % 1) ? 4 : 5
      return range
    }
  }
  
}
</script>

<template>
          <div
            class="mb-card mb-1 me-2"
            >
            <img class="mb-cover" :src="posterUrl" @error="errorLoadingPoster" :alt="showObj.name">

            <div class="tv-info">
              
                          <h5 class="p-2">{{ showObj.title || showObj.name }}</h5>
                          
              
                          <div class="lang-box ms-2">
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
              
                          <div class="votebox ms-2 my-2">
                            <i
                              v-for="index in (Math.floor(showObj.vote_average/2))" :key="index"
                              class="fa-solid fa-star"></i>
              
                            <i v-if="(Math.round(showObj.vote_average)/2).toFixed(1) % 1" class="fa-solid fa-star-half-stroke"></i>
                            <i
                              v-for="index in (starRangeModifier -(Math.floor(showObj.vote_average/2)))" :key="index"
                              class="fa-regular fa-star"></i>
                          </div>

                          <div class="description px-2 pb-5">
                            <p>{{ showObj.overview }}</p>
                          </div>

            </div>
          </div>
  
</template>

<style lang="scss" scoped>
  .mb-card{
      height: 300px;
      width: 200px;
      position: relative;
      overflow: hidden;
      
      .mb-cover{
        position: absolute;
        object-fit: cover;
        width: 100%;
      }
      .tv-info{
        position: absolute;
        z-index: 5;
        opacity: 0;
        transition: all 1s;
        .lang-box{
          img{
          height: 20px;
          width: 30px;
         }
        }
      }  
      .description{
        height: 150px;
        overflow-y: scroll;
      }    
    }

    .mb-card{
      &::after,
      &::before{
        position: absolute;
        z-index: 3;
        content: "";
        width: 15%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: bold;
        background-color: rgb(134, 138, 139);
        transition: all 1s;
      }
      &::before{
        top: 0;
        right: -12px;
        border-radius: 0 0 0 100%;
      }
      &::after{
        bottom: 0;
        left: 12px;
        border-radius: 0 100%  0 0;
      }
      &:hover::before,
      &:hover::after{
        width: 200px;
        height: 300px;
        background-color: black;
      }
      &:hover{
        .tv-info{
          opacity: 1;
        }
      }
    }
  
</style>