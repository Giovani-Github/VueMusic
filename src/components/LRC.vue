<!-- 歌词组件 -->
<template>
  <!--<div class="lrcContainer">-->
    <div class="lrc">
      <!--<p class="lrc-p" v-for="(item, index, key) in lrcData">{{item}}</p>-->
      <!-- lrc文件中的时间与播放获得时间对应的比对关系 -->
      <p class="lrc-p" v-show="key < currentTime && key > currentTime - (keyArr[index+1] - keyArr[index])" v-for="(item,key,index) in lrcData">{{ item }}</p>
    </div>
  <!--</div>-->
</template>

<script>
  export default {
    name: "LRC",

    data() {
      return {
        lrcData: "", // 歌词对象
        keyArr: [] // 所有歌词时间点
      };
    },

    props: {
      currentTime: {
        type: Number,
        default: null
      },

      durationTime: {
        type: Number,
        default: null
      },

      songid: {
        type: String,
        default: null
      }
    },

    created() {
      const lrcUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.lry&songid=" + this.songid;

      this.$axios.get(lrcUrl).then(res => {

        // 解析歌词文本，转换成对象。数据内容是：每个时间点，对应一段歌词。时间为key，歌词为value
        var lyrics = res.data.lrcContent.split("\n");
        var lrcObj = {};
        for (var i = 0; i < lyrics.length; i++) {
          var lyric = decodeURIComponent(lyrics[i]);
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegExpArr = lyric.match(timeReg);
          if (!timeRegExpArr) continue;
          var clause = lyric.replace(timeReg, '');
          for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
              sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
          }
        }

        this.lrcData = lrcObj;
        /**
         {
           "100"："我是歌词",
           "103":"我是歌词2"
         }
         */

      }).catch(error => {

        console.log(error);

      });
    },

    computed: {
      // 取出所有的key，即时间点
      getAllKey() {
        for (var allkey in this.lrcData) {
          this.keyArr.push(allkey);
        }
      }
    },
  }
</script>

<style scoped>
  .lrcContainer {
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;
  }

  .lrc {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .active {
    display: block;
  }

  .lrc-p {
    height: 30px;
    line-height: 30px;
  }

  .up30 {
    margin-top: -30px;
  }
</style>
