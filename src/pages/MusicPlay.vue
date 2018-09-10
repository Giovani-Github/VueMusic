<!-- 音乐播放页面 -->
<template>
  <div class="musicPlay">
    <audio :src="playData.bitrate.file_link" autoplay controls></audio>
  </div>
</template>

<script>
  export default {
    name: "MusicPlay",

    data() {
      return {
        playData: {
          bitrate: {
            file_link: ""
          }
        }
      }
    },

    created() {
      const playUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.$route.params.songid;
      this.$axios.get(playUrl).then(res => {

        this.playData = res.data;

      }).catch(error => {

        console.log(error);

      });
    }

  }
</script>

<style scoped>

</style>
