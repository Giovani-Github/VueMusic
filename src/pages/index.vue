<template>
  <div class="container">
    <MusicNav/>
    <router-view></router-view>
  </div>
</template>

<script>
  import MusicNav from "../components/MusicNav"

  export default {
    name: "index",

    components: {
      MusicNav
    },

    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
