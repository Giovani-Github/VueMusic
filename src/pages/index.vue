<template>
  <div class="container">
    <MusicNav/>
    <router-view></router-view>
    <Singer/>
  </div>
</template>

<script>
  import MusicNav from "./MusicNav"
  import Singer from "./Singer";

  export default {
    name: "index",

    components: {
      Singer,
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
