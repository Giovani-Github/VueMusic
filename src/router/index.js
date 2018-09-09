import Vue from 'vue';
import Router from 'vue-router';
import Index from "../pages/index";
import HotMusic from "../pages/MusicList/HotMusic";
import NewMusic from "../pages/MusicList/NewMusic";
import KingMusic from "../pages/MusicList/KingMusic";

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
          path: '/hot',
          name: 'HotMusic',
          component: HotMusic
        },
        {
          path: '/new',
          name: 'NewMusic',
          component: NewMusic
        },
        {
          path: '/king',
          name: 'KingMusic',
          component: KingMusic
        }
      ]
    }
  ]
});
