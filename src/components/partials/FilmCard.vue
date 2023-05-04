
<script>
export default {
  name: "FilmCard",
  props:{
    filmObj: Object
  }
}
</script>

<template>
          <div
            class="mb-card col-2"
            >
            <h4>{{ filmObj.title }}</h4>
            <h4>{{ filmObj.original_title }}</h4>
            <h4>Lingua: {{ filmObj.original_language }}</h4>
            <h4>Voto: {{ filmObj.vote_average }}</h4>
          </div>
  
</template>

<style lang="scss" scoped>
  .mb-card{
      /*debug*/
      border: 1px solid white;
      padding: 20px;

    }
</style>