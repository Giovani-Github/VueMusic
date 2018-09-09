<!-- 音乐榜单组件 新歌榜 -->
<template>
  <div>
    <MusicList musictype="11"/>
  </div>
</template>

<script>
  import MusicList from "../../components/MusicList";

  export default {
    name: "NewMusic",
    
    components: {MusicList},

    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
