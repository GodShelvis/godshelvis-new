<template>
  <div class="home-space">
    <div class="home-layor">
      <div class="home-list">
        <SSearch></SSearch>
        <SBookmark style="margin-top: 30px" v-model:bookmark="bookmarks1"></SBookmark>
        <SBookmark style="margin-top: 30px" v-model:bookmark="bookmarks2"></SBookmark>
        <SBookmark style="margin-top: 30px" v-model:bookmark="bookmarks3"></SBookmark>
      </div>
      <div class="plugin-list">
        <SCalendar style="margin-bottom: 30px"></SCalendar>
        <div style="width: 100%; display: flex; flex-direction: row; justify-content: space-between;">
          <SWeather></SWeather>
          <SClock></SClock>
        </div>
        <STranslate style="margin-top: 30px"></STranslate>
      </div>
    </div>
    <div class="beian-area">
      <a class="beian" href="http://www.beian.miit.gov.cn/">鄂ICP备19004172号-1</a>
      <!-- <a class="godshelvis-home" href="https://www.godshelvis.com/">GodShelvis.com</a> -->
    </div>
  </div>
  
  
</template>

<script setup lang="ts">
import SSearch from '../../components/s-search'
import SBookmark from '../../components/s-bookmark'
import SCalendar from '../../components/s-calendar'
import SWeather from '../../components/s-weather'
import SClock from '../../components/s-clock'
import STranslate from '../../components/s-translate'

const bookmarks1 = {
  title: '视频',
  color: '#F26D48',
  bookmarks: [
    {
      name: 'bilibili',
      description: '哔哩哔哩弹幕视频网',
      url: 'https://www.bilibili.com'
    },
    {
      name: '斗鱼',
      description: '斗鱼直播平台',
      url: 'https://www.douyu.com/directory/myFollow'
    },
    {
      name: '音范丝',
      description: '音范丝|影音集|精选4K蓝光原盘下载，顶级收藏',
      url: 'www.yinfans.me'
    },
    {
      name: '高清网',
      description: '高清电影网|720P|1080P|蓝光原盘|磁力链迅雷下载高清的电影天堂',
      url: 'http://gaoqing.la/'
    }
  ]
}
const bookmarks2 = {
  title: '生活常用',
  color: '#75CD5F',
  bookmarks: [
    {
      name: '淘宝',
      description: '淘宝网',
      url: 'https://www.taobao.com/'
    },
    {
      name: '京东',
      description: '京东商城',
      url: 'https://www.jd.com/'
    },
    {
      name: '知乎',
      description: '有问题就会有答案',
      url: 'https://www.zhihu.com/'
    },
    {
      name: 'MacWk',
      description: 'MacWk - 精品mac软件下载',
      url: 'https://www.macwk.com/'
    }
  ]
}

const bookmarks3 = {
  title: '工作常用',
  color: 'rgb(81 134 213)',
  bookmarks: [
    {
      name: '阿里云',
      description: '阿里云服务',
      url: 'https://www.aliyun.com/'
    },
    {
      name: 'Github',
      description: '代码托管平台',
      url: 'https://github.com/'
    },
    {
      name: '腾讯文档',
      description: '在线文档编辑分享',
      url: 'https://docs.qq.com/'
    },
    {
      name: 'Gmail',
      description: 'Google邮箱',
      url: 'https://accounts.google.com/b/0/AddMailService'
    }
  ]
}
</script>

<style scoped>
.home-space {
  width: 1440px;
  min-height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.home-layor {
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.home-list{
  margin: 50px 75px 0px;
  width: 600px;
  min-height: 880px;
  /*background-color: #4f3535;*/
  display: flex;
  flex-direction: column;
}
.plugin-list{
  margin: 50px 75px 0px;
  width: 540px;
  min-height: 880px;
  /*background-color: #4f3535;*/
  display: flex;
  flex-direction: column;
}
.beian-area{
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
.beian{
  margin-right: 75px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.12);
}
.godshelvis-home{
  margin-right: 25px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.12);
}
</style>
