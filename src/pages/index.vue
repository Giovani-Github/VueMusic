<template>
  <div class="container">
    <!-- 音乐榜单导航 -->
    <MusicNav/>
    <!-- 各音乐榜单列表 -->
    <router-view></router-view>
    <!-- 歌手列表 -->
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
