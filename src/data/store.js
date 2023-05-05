import {reactive} from "vue";
import axios from "axios";

export const store = reactive({
  //Api
  apiUrlMovieCall: "https://api.themoviedb.org/3/search/movie?api_key=f62a410fadd24c51e0a6a6df10be78df", //servirà query param
  apiUrlTvCall: "https://api.themoviedb.org/3/search/tv?api_key=f62a410fadd24c51e0a6a6df10be78df", //sempre query param
  langParam: "it",
  queryParamStr: "",
  srcPlaceholder: "Cerca un film o una serie Tv",
  apiUrlPopular: "https://api.themoviedb.org/3/movie/popular?api_key=f62a410fadd24c51e0a6a6df10be78df&page=1",

  //stored data
  filmArray: [],
  tvArray: [],

  //api calls
  getMovieApi(){
    
    axios.get(this.apiUrlMovieCall,{
      params:{
        query: this.queryParamStr,
        language: this.langParam,
      }
    })
    .then((result) => {
      if(result.data.results.length === 0){
        this.srcPlaceholder = "Inserisci una ricerca valida"
      } else {
        this.filmArray = result.data.results
        this.srcPlaceholder = "Cerca un film o una serie Tv"
      }
      this.queryParamStr = ""
    }).catch((err) => {
      console.log(err);
    });
  },

  getTvApi(){
    axios.get(this.apiUrlTvCall,{
      params:{
        query: this.queryParamStr,
        language: this.langParam,
      }
    })
    .then((result) => {
      if(result.data.results.length === 0){
        this.srcPlaceholder = "Inserisci una ricerca valida"
      } else {
        this.tvArray = result.data.results
        this.srcPlaceholder = "Cerca un film o una serie Tv"
      }
      this.queryParamStr = ""
    }).catch((err) => {
      console.log(err);
    });
  },
  
  getShowsApi(){
    this.categorie = "";
    this.getTvApi();
    this.getMovieApi()
  },

  getPopularApi(){
    axios.get(this.apiUrlPopular,{
      params:{
        language: this.langParam,
      }
    })
    .then((result) => {
      
        this.filmArray = result.data.results
        this.categorie = "Popolari"
    }).catch((err) => {
      console.log(err);
    });
  },

  //others
  categorie: "",

  
})