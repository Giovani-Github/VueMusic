import Vue from 'vue';
import Router from 'vue-router';
import Index from "../pages/index";
import HotMusic from "../pages/MusicList/HotMusic";
import NewMusic from "../pages/MusicList/NewMusic";
import KingMusic from "../pages/MusicList/KingMusic";
import SingerInfo from "../pages/Singer/SingerInfo";
import MusicPlay from "../pages/MusicPlay";
import Recommend from "../pages/Recommend/Recommend";
import SearchView from "../pages/search/SearchView";

Vue.use(Router);

export default new Router({
  linkActiveClass: "active", // 路由被选中的样式的类名，在app.vue中进行修饰
  // 配置路由
  routes: [
    {
      path: '/', // 路由访问的地址，"/"是默认地址
      name: 'Index', // 路由的名称
      component: Index, // 路由所要展示的内容
      redirect: "/hot", // 重定向到该地址
      children: [ // 嵌套路由
        {
          path: '/hot', // 热门歌曲列表
          name: 'HotMusic',
          component: HotMusic
        },
        {
          path: '/new', // 最新歌曲列表
          name: 'NewMusic',
          component: NewMusic
        },
        {
          path: '/king', // king歌曲列表
          name: 'KingMusic',
          component: KingMusic
        }
      ]
    },
    {
      // 如需要通过路由传递参数，需要在path中生明，/:singerid
      path: "/singer/:singerid", // 歌手页
      name: "SingerInfo", // 携带参数是，所使用的路径名称
      component: SingerInfo
    },
    {
      path: "/play/:songid", // 音乐播放页
      name: "MusicPlay",
      component: MusicPlay
    },
    {
      path:"/recommend/:musictype",
      name:"Recommend",
      component:Recommend
    },
    {
      path:"/searchview/:searchcontent",
      name:"SearchView",
      component:SearchView
    }
  ]
});
