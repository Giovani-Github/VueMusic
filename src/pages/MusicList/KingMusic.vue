<!-- 音乐榜单组件 king榜 -->
<template>
  <div>
    <MusicList musictype="2"/>
  </div>
</template>

<script>
  import MusicList from "../../components/MusicList";

  export default {
    name: "kingMusic",
    components: {MusicList},
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
