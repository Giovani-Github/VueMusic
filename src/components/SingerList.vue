<!-- 歌手列表组件 -->
<template>
  <!--
    tag: 编译后会把router-link标签编程tag指定标签
    传参：
      {name:'SingerInfo', params:{singerid:singerid }}
      通过路由给组件传递参数，name传给那个组件，params要传递的参数。
      需要在router/index.js中的路由地址配置中，进行声明
      name生明的组件中包含的组件也可以接收到路由传递的参数
  -->
  <router-link :to="{name:'SingerInfo', params:{singerid:singerid }}" tag="div" class="card">
    <div class="card-slider">
      <div class="poster">
        <img :src="singerInfo.avatar_big" :alt="singerInfo.name">
      </div>
    </div>
    <div class="info">
      <div class="name">{{singerInfo.name}}</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "SingerList",

    data() {
      return {
        // 歌手信息
        singerInfo: {}
      }
    },

    props: {
      // 传递过来的歌手id
      singerid: {
        type: String,
        default: 0
      }
    },

    created() {
      // 进行网络请求获取歌手id
      const SingerUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=" + this.singerid;
      this.$axios.get(SingerUrl).then(res => {

        this.singerInfo = res.data;

      }).catch(error => {

        console.log(error);

      });
    }
  }
</script>

<style scoped>
  .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 20px;
  }

  .card-slider {
    border: 1px solid #eee;
  }

  .card .poster {
    position: relative;
    height: 0;
    padding-bottom: 100%;
  }

  img {
    max-width: 100%;
  }

  .card .info {
    font-size: 12px;
    overflow: hidden;
    white-space: normal;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
  }
</style>
