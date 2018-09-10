<!-- 更多歌曲，根据音乐类型显示更多歌曲 -->
<template>
  <div class="">
    <RecommendList :musictype="$route.params.musictype"/>
  </div>
</template>

<script>
  import RecommendList from "../../components/RecommendList";

  export default {
    name: "Recommend",
    components: {RecommendList}
  }
</script>

<style scoped>

</style>
