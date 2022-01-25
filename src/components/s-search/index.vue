<template>
  <div class="search-area">
    <div class="search-channel no-select" @click="switchChannel">
      <Search class="search-logo"/>
      {{searchChannel[currentChannel].name}}
    </div>
    <input type="text" class="search-input" spellcheck =“false” v-model="input" @keydown.enter="redirectTo">
  </div>
</template>

<script setup lang="ts">
import { Search } from '@vicons/ionicons5'
import {ref} from 'vue'

let currentChannel = ref(0)
let input = ref('')

type ChannelType = {
  name: String,
  redirect: String
}
const searchChannel: ChannelType[] = [
  {
    name: '百度搜索',
    redirect: 'http://www.baidu.com/s?wd='
  },
  {
    name: '谷歌搜索',
    redirect: 'https://www.google.com/search?hl=zh-CN&q='
  }
]
const switchChannel = function (){
  if (currentChannel.value < searchChannel.length-1) {
    currentChannel.value += 1
  } else {
    currentChannel.value = 0
  }
}

const redirectTo = ()=>{
  if (input.value != '') {
    window.location.href = searchChannel[currentChannel.value].redirect + input.value
  }
}


</script>

<style scoped>
.search-area{
  width: calc( 100% - 20px );
  height: 108px;
}
.search-channel{
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
}

.search-logo {
  width: 16px;
  margin: 2px 5px 2px 0;
}
.search-input{
  width: 100%;
  height: 80px;
  background-color: #F2F2F2;
  border-radius: 5px;
  box-shadow: -2px -2px 2px 0 #FFFFFF inset, 2px 2px 2px 0 #CECECE inset;
  border: none;
  outline: none;
  color: #666666;
  padding-left: 20px;
  font-size: 30px;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
  text-shadow: -2px -2px 2px #FFFFFF, 2px 2px 2px #CECECE;
  caret-color: #666666;
  transition: 0.2s;
}
.search-input:hover{
  box-shadow: -2px -2px 2px 0 #FFFFFF inset, 2px 2px 2px 0 #b3b3b3 inset;
}
.search-input:focus{
  box-shadow: -2px -2px 2px 0 #FFFFFF inset, 2px 2px 2px 0 #b3b3b3 inset;
}
</style>
