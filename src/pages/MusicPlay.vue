<!-- 音乐播放页面 -->
<template>
  <div class="play">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p>{{ playData.songinfo.title }}</p>
          <p>{{ playData.songinfo.author }}</p>
        </div>
        <router-link to="/"><i class="iconfont icon-sousuo right"></i></router-link>
      </div>
    </div>
    <div class="song-info">
      <div class="song-info-img">
        <img :src="playData.songinfo.pic_big">
        <div class="song-lrc">

          <!-- 给歌词组件传递参数，根据传递的参数显示歌词 songid:歌曲id -->
          <LRC :currentTime="currentTime" :durationTime="durationTime" :songid="$route.params.songid"/>

        </div>
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
    <div class="song">
      <!-- ref：定义的名称，可以通过this.$refs.名称，拿到该标签 -->
      <audio ref="player" :src="playData.bitrate.file_link" controls>
      </audio>
    </div>
  </div>
</template>

<script>
  import "../assets/font/iconfont.css";
  import LRC from "../components/LRC";

  export default {
    name: "MusicPlay",
    components: {LRC},
    data() {
      return {
        playData: {
          bitrate: {
            file_link: ""
          },
          songinfo: {}
        },

        currentTime: null, // 当前音乐播放时间
        durationTime: null // 整体音乐播放时长
      }
    },

    methods: {
      // 添加监听事件
      addEventListeners() {
        const self = this;
        // 给player绑定两个事件，获取当前播放时间，和整体时长
        self.$refs.player.addEventListener('timeupdate', self._currentTime);
        self.$refs.player.addEventListener('canplay', self._durationTime);
      },

      // 移除监听事件
      removeEventListeners: function () {
        // 移除获取当前时间和整体时长的监听事件
        const self = this;
        self.$refs.player.removeEventListener('timeupdate', self._currentTime);
        self.$refs.player.removeEventListener('canplay', self._durationTime);
      },

      // 当前音乐播放时间
      _currentTime() {
        var self = this;
        self.currentTime = self.$refs.player.currentTime // currentTime是audio标签提供的获取当前播放时间的方法
      },

      // 整体音乐播放时长
      _durationTime() {
        var self = this;
        self.durationTime = self.$refs.player.duration // duration是audio标签提供的获得歌曲播放整体时间的方法
      }

    },

    // 生命周期函数， 组件加载前
    mounted() {
      this.addEventListeners();
    },

    // 生命周期函数，组件销毁时
    beforeDestroyed() {
      this.removeEventListeners();
    },

    // 生命周期函数，组件创建时
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
  .header {
    padding: 15px;
  }

  .music-info {
    flex: 1;
    font-size: 20px;
  }

  .title {
    display: flex;
    text-align: center;
  }

  .left {
    font-size: 30px;
  }

  .right {
    font-size: 30px;
  }

  .song-info {
    padding: 15px;
  }

  .song-info-img {
    text-align: center;
  }

  .song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, .31);
  }

  .song-lrc {
    margin-top: 100px;
    min-height: 50px;
    max-height: 50px;
  }

  .iconbox {
    display: flex;
    margin-top: 30px;
  }

  .iconbox .box {
    flex: 1;
  }

  .song {
    width: 100%;
    text-align: center;
  }

  .song audio {
    width: 80%;
  }

  .active {
    color: #222;
  }
</style>
