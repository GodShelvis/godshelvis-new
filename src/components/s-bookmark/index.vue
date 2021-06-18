<template>
  <div class="bookmark-area no-select">
    <div class="bookmark-title" :style="{backgroundColor: bookmark.color}">{{bookmark.title}}</div>
    <div class="bookmark" v-for="bookmark in bookmarks" @click="redirectTo(bookmark.url)">
      <div class="bookmark-name">{{ bookmark.name }}</div>
      <div class="bookmark-description">{{ bookmark.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  bookmark: Object
})
const bookmarks = props.bookmark.bookmarks

const redirectTo = (url: String)=>{
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url
  }
  window.location.href = url
}
</script>

<style scoped>
.bookmark-area{
  width: 100%;
  min-height: 50px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: -2px -2px 2px 0 #FFFFFF, 2px 2px 2px 0 #CECECE;
  padding-bottom: 15px;
  transition: 0.2s;
}
.bookmark-area:hover{
  box-shadow: -5px -5px 10px 0 #FFFFFF, 5px 5px 5px 0 #CECECE;
}
.bookmark-title{
  width: calc( 100% - 15px );
  height: 30px;
  border-radius: 5px 5px 0 0;
  color: #f2f2f2;
  text-align: start;
  padding: 5px 0 0 15px;
}
.bookmark{
  margin: 5px 15px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.bookmark:hover{
  text-shadow: -1px -1px 1px #FFFFFF, 1px 1px 1px #CECECE;
}
.bookmark-name{
  width: 65px;
  text-align: start;
  margin-right: 10px;
}
.bookmark-description{
  width: 100%;
  text-align: start;
  font-family: PingFangSC-Regular, sans-serif;
  color: #6666667f;
}
</style>
