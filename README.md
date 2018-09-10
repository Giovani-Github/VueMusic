### vue音乐应用

​	使用的是 :  		

[百度音乐接口]: http://www.wwtliu.com/blog/?p=271



### 错误总结

 1. `vue` 中`html` 板块使用变量，找不到变量的错误

    ```
    vue.esm.js?efeb:591 [Vue warn]: Error in render: "TypeError: Cannot read property 'file_link' of undefined"
    ```

    错误写法：`playData.bitrate.file_link` 找不到，因为在`data`中没有定义完整

    ​	文件路径：`src/pages/MusicPlay.vue`

    ```
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
            playData: {}
          }
        }
      }
    </script>
    
    <style scoped>
    
    </style>
    ```

    正确写法：

    ​	文件路径：`src/pages/MusicPlay.vue`

    ```
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
        }
      }
    </script>
    
    <style scoped>
    
    </style>
    ```
