<!-- 音乐列表组件 -->
<template>
  <div class="musiclist">
    <div class="panel hotsongs on" v-loading="loading">
      <ul class="list">

        <!-- 遍历音乐列表 需通过路由传递歌曲id-->
        <router-link :key="index" :to="{name:'MusicPlay', params:{songid:item.song_id}}" tag="li" class="song"
                     v-for="(item, index) in musicData.song_list">
          <div class="poster">
            <img :src="item.pic_big" :alt="item.title"/>
          </div>
          <div class="info">
            <div class="name">{{item.title}}</div>
            <div class="author">{{item.author}}</div>
          </div>
        </router-link>
      </ul>
      <router-link :to="{name:'Recommend',params:{musictype:musictype}}" tag="div" class="more-songs">
        查看该榜单&gt;
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicList",

    data() {
      return {
        loading:true, // element-ui的局部loading效果
        // 音乐列表数据
        musicData: {
          song_list: []
        }

      }
    },

    // 使用者给该组件传递的参数
    props: {
      musictype: {
        type: String,
        default: "1"
      }
    },

    created() {

      // 获取音乐列表数据
      const musiclistUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=" + this.musictype + "&size=5&offset=0";

      this.$axios.get(musiclistUrl).then(res => {

        this.musicData = res.data;
        this.loading = false;

      }).catch(error => {

        console.log(error);

      });

    }
  }
</script>

<!-- scoped表示局部生效，即当前组件生效。 -->
<style scoped>
  .musiclist {
    background-color: #fff;
    margin-top: 10px;
    padding: 10px 17px;
    padding-top: 0;
  }

  .layout.home .mod-lists .panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: none;
  }

  .list {
    word-wrap: break-word;
    -webkit-hyphens: auto;
    hyphens: auto;
    word-break: break-all;
    min-height: 330px;
  }

  .panel .list li {
    height: 55px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .list li.song {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    min-height: 55px;
    text-align: left;
    margin-top: 10px;
  }

  .panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
  }

  .panel .list li .poster img {
    border: 1px solid #eee;
  }

  .list li .info {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel .list li .info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
  }

  .panel .list li .info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }

  .more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
</style>
