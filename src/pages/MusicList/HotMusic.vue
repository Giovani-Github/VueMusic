<!-- 音乐榜单组件 热歌榜 -->
<template>
  <div>
    <MusicList musictype="1"/>
  </div>
</template>

<script>
  import MusicList from "../../components/MusicList";

  export default {
    name: "HotMusic",
    data() {
      return{

      }
    },
    components:{
      MusicList
    }
  }
</script>

<style scoped>

</style>
