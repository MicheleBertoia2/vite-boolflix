import {reactive} from "vue";

export const store = reactive({
  //Api
  apiUrlMovieCall: "https://api.themoviedb.org/3/search/movie?api_key=f62a410fadd24c51e0a6a6df10be78df", //servirà query param
  apiUrlTvCall: "https://api.themoviedb.org/3/search/tv?api_key=f62a410fadd24c51e0a6a6df10be78df", //sempre query param
  langParam: "it",
  queryParamStr: "",
  apiUrlPopular: "https://api.themoviedb.org/3/movie/popular?api_key=f62a410fadd24c51e0a6a6df10be78df&page=1",

  //stored data
  
  //api calls
})