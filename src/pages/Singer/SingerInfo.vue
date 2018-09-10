<!-- 歌手信息组件 -->
<template>
  <div class="singerInfo">
    <SingerMusic />
  </div>
</template>

<script>
    import SingerMusic from "../../components/SingerMusic";
    export default {
        name: "SingerInfo",
      components: {SingerMusic}
    }
</script>

<style scoped>

</style>
