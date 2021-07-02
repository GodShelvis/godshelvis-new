<template>
  <div class="home-layor">
    <div class="home-list">
      <SSearch></SSearch>
      <SBookmark style="margin-top: 30px" v-model:bookmark="bookmarks1"></SBookmark>
      <SBookmark style="margin-top: 30px" v-model:bookmark="bookmarks2"></SBookmark>
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
      name: '音范丝',
      description: '音范丝|影音集|精选4K蓝光原盘下载，顶级收藏',
      url: 'www.yinfans.me'
    },
    {
      name: '美剧迷',
      description: '美剧大全,最新好看的天天美剧下载,在线观看,美剧天堂',
      url: 'www.yinfans.me'
    }
  ]
}
const bookmarks2 = {
  title: '视频',
  color: '#75CD5F',
  bookmarks: [
    {
      name: '淘宝',
      description: '淘宝网',
      url: 'www.yinfans.me'
    },
    {
      name: 'MacWk',
      description: 'MacWk - 精品mac软件下载',
      url: 'www.yinfans.me'
    },
    {
      name: '扫雷',
      description: 'Minesweeper Online',
      url: 'www.yinfans.me'
    }
  ]
}
</script>

<style scoped>
.home-layor {
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.home-list{
  margin: 50px 75px;
  width: 600px;
  min-height: 70vh;
  /*background-color: #4f3535;*/
  display: flex;
  flex-direction: column;
}
.plugin-list{
  margin: 50px 75px;
  width: 540px;
  min-height: 70vh;
  /*background-color: #4f3535;*/
  display: flex;
  flex-direction: column;
}
</style>
