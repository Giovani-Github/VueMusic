import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from "axios";
import qs from "qs";

Vue.prototype.$axios = Axios; // 网络请求
Vue.prototype.HOST = '/baidu_music_api'; // 跨域相关，在config\index>.js中

// -----------网络请求相关设置-------------
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  if (config.method === "post") {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
