<template>
  <div class="container">
    <!-- 搜索框 -->
    <Search/>
    <!-- 轮播图 -->
    <SwiperSilder/>
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
  import SwiperSilder from "../components/SwiperSilder";
  import Search from "../components/Search";

  export default {
    name: "index",

    components: {
      Search,
      SwiperSilder,
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
