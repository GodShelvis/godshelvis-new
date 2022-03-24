<template>
  <div class="home-space">
    <div class="home-layor">
      <div class="home-list">
        <div style="width: 600px;transition: 0.3s;" v-if="viewMode == 'base'">
          <SSearch style="width: 540px; margin: 0 25px 0 25px"></SSearch>
          <!-- 书签 -->
          <Swiper style="width: 600px;" :mousewheel="true">
            <swiper-slide v-for="(group,index) in bookmarks" :key="index">
              <div class="icon-group">
                <SBookmarkIcon :name="bookmark.icon" :url="bookmark.url" v-for="(bookmark,index) in group" :key="index"></SBookmarkIcon>
              </div>
            </swiper-slide>
          </Swiper>
          <!-- 日历 -->
          <SCalendar style="width: 540px; margin: 0 25px 25px 25px"></SCalendar>
          <div style="width: 540px; margin: 0 25px 0 25px; display: flex; flex-direction: row; justify-content: space-between;">
            <!-- 天气 -->
            <SWeather></SWeather>
            <!-- 时钟 -->
            <SClock></SClock>
          </div>
          <div style="width: 570px; margin: 0px 25px 0 25px; display: flex; flex-direction: row; justify-content: space-between;">
            <!-- 百度地图 -->
            <SMap></SMap>
            <!-- 哔哩哔哩关注列表 -->
            <SBilibili @trigger-play="openVideoMode"></SBilibili>
          </div>
          <!-- 翻译 -->
          <STranslate style="width: 540px; margin: 0px 25px 0 25px"></STranslate>
        </div>        
        <!-- 哔哩哔哩关注列表 -->
        <!-- <SBilibili style="margin-top: 25px" v-if="user.bilibiliUid" @trigger-play="openVideoMode"></SBilibili> -->
      </div>
    </div>
    <div class="beian-area">
      <a class="beian" href="http://beian.miit.gov.cn/">鄂ICP备19004172号-1</a>
    </div>
  </div>
  
  
</template>

<script setup lang="ts">
import SSearch from '../../components/s-search/index.vue'
import SBookmark from '../../components/s-bookmark/index.vue'
import SBookmarkIcon from '../../components/s-bookmark/BookmarkIcon.vue'
import SCalendar from '../../components/s-calendar/index.vue'
import SWeather from '../../components/s-weather/index.vue'
import SClock from '../../components/s-clock/index.vue'
import STranslate from '../../components/s-translate/index.vue'
import SBilibili from '../../components/s-bilibili/index.vue'
import SMap from '../../components/s-map/index.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Mousewheel } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel'

import { ref } from '@vue/reactivity'

SwiperCore.use([Mousewheel])

const viewMode = ref('base')

const bookmarks = [
  [
    {
      name: 'bilibili',
      icon: 'bilibili',
      description: '哔哩哔哩弹幕视频网',
      url: 'https://www.bilibili.com'
    },
    {
      name: '斗鱼',
      icon: 'douyu',
      description: '斗鱼直播平台',
      url: 'https://www.douyu.com/directory/myFollow'
    },
    {
      name: '音范丝',
      icon: 'yinfans',
      description: '音范丝|影音集|精选4K蓝光原盘下载，顶级收藏',
      url: 'www.yinfans.me'
    },
    {
      name: 'youtube',
      icon: 'youtube',
      description: '',
      url: 'https://youtube.com/'
    },
    {
      name: '淘宝',
      icon: 'taobao',
      description: '淘宝网',
      url: 'https://www.taobao.com/'
    },
    {
      name: '京东',
      icon: 'jd',
      description: '京东商城',
      url: 'https://www.jd.com/'
    }
  ],
  [
    {
      name: '知乎',
      icon: 'zhihu',
      description: '有问题就会有答案',
      url: 'https://www.zhihu.com/'
    },
    {
      name: 'MacWk',
      icon: 'macwk',
      description: 'MacWk - 精品mac软件下载',
      url: 'https://www.macwk.com/'
    },
    {
      name: '阿里云',
      icon: 'aliyun',
      description: '阿里云服务',
      url: 'https://www.aliyun.com/'
    },
    {
      name: 'Github',
      icon: 'github',
      description: '代码托管平台',
      url: 'https://github.com/'
    },
    {
      name: '腾讯文档',
      icon: 'tencent-doc',
      description: '在线文档编辑分享',
      url: 'https://docs.qq.com/'
    },
    {
      name: 'Gmail',
      icon: 'gmail',
      description: 'Google邮箱',
      url: 'https://accounts.google.com/b/0/AddMailService'
    }
  ]
]

const openVideoMode = (play:boolean)=>{
  viewMode.value = play?'video':'base'
}

</script>

<style scoped>
.home-space {
  width: 660px;
  min-height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.home-layor{
  width: 660px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.home-list{
  margin: 30px 75px 0px;
  width: 600px;
  min-height: 940px;
  display: flex;
  flex-direction: column;
}
.plugin-list{
  margin: 50px 75px 0px;
  width: 540px;
  min-height: 880px;
  display: flex;
  flex-direction: column;
}
.beian-area{
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
.home-list{
  width: 660px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.beian{
  margin-right: 75px;
  font-size: 14px;
  color: var(--content);
  text-shadow: -0px -0px 0px var(--shadow-light), 0px 0px 0px var(--shadow-dark);
}
a{text-decoration: none;}
a:visited{text-decoration: none;}
a:hover {text-decoration: none;}
a:active{text-decoration:none;}
.godshelvis-home{
  margin-right: 25px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.12);
}

/* 图标组 */
.icon-group{
  width: 600px;
  height: 80px;
  padding: 25px 24px;
  display: flex;
  flex-direction: row;
}
</style>
<style lang="scss" scoped>
@import url('../../../node_modules/swiper/swiper.min.css');
.swiper-container{
  width: 600px;
  height: 80px;
}
.swiper-wrapper{
  width: 600px;
  height: 80px;
}

</style>