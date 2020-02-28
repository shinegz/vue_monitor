import Vue from 'vue'
// 将百度地图所有组件全部导入
import BaiduMap from 'vue-baidu-map'

/* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
// 全局注册
Vue.use(BaiduMap, {
  ak: 'uFGDqQBGcDGmSE349lbnD1nyBAhEDk78'
})
