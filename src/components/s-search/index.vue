<template>
  <div class="search-area">
    <div class="search-channel no-select" @click="switchChannel">
      <Search class="search-logo"/>
      {{searchChannel[currentChannel].name}}
    </div>
    <input type="text" class="search-input" spellcheck =“false” v-model="input" @keydown.enter="redirectTo" @keydown.tab="movetoKeyword()">
    <!-- 搜索工具 -->
    <SearchTools :toolname="input" @trigger-clean="()=>input=''"></SearchTools>
    <!-- 关键词联想 -->
    <div :class="`keywords-list${keywords.keys.length == 0?'-empty':''}`">
      <p :class="`keywords text-gray${k.q==input?'2':''} no-select`" v-for="(k,i) in keywords.keys" :key="i" @click="input=k.q;redirectTo()">{{k.q}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@vicons/ionicons5'
import {onMounted, reactive, ref, watch} from 'vue'
import { jsonp } from 'vue-jsonp'
import fly from 'flyio'
import SearchTools from './SearchTools.vue'

let currentChannel = ref(0)
let input = ref('')
let keywords = reactive({
  keys: []
})
let tabMode = ref(false)

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

// 监听input,变化就查询关键词
watch(input,(n,o)=>{
  if (tabMode.value) {
    return
  }
  jsonp(`https://www.baidu.com/sugrec?prod=pc&wd=${input.value}`).then(res => {
    if (res.g instanceof Array) {
      keywords.keys = res.g;
    } else {
      keywords.keys = [];
    }
  })
})
// 按tab时将关键词复制到输入框
const movetoKeyword = ()=>{
  if (!tabMode.value) {
    tabMode.value = true;
    if (input.value != '' && keywords.keys.length >0) {
      let keys = []
      for (let i = 0; i < keywords.keys.length; i++) {
        const k:{q:string} = keywords.keys[i];
        keys.push(k.q);
      }
      let idx = keys.indexOf(input.value)
      if (idx > -1 && idx < keys.length-1) {
        input.value = keys[idx+1]
      } else {
        input.value = keys[0]
      }
    }
    setTimeout(()=>tabMode.value = false,100)
  }
}

onMounted(()=>{
  document.onkeydown=(e)=>{
    if (e.keyCode==9) {
      return false;
    }
  }
})
</script>

<style lang="scss" scoped>
.search-area{
  width: calc( 100% - 20px );
  min-height: 108px;
}
.search-channel{
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--primary);
}

.search-logo {
  width: 16px;
  margin: 2px 5px 2px 0;
}
.search-input{
  width: calc( 100% - 20px );
  height: 80px;
  background-color: var(--bg);
  border-radius: 5px;
  box-shadow: -2px -2px 2px 0 var(--shadow-light) inset, 2px 2px 2px 0 var(--shadow-dark) inset;
  border: none;
  outline: none;
  padding-left: 20px;
  font-size: 30px;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
  text-shadow: -2px -2px 2px var(--shadow-light), 2px 2px 2px var(--shadow-dark);
  caret-color: var(--content);
  color: var(--primary);
  transition: 0.2s;
}
.search-input:hover{
  box-shadow: -2px -2px 2px 0 var(--shadow-light) inset, 2px 2px 2px 0 var(--shadow-dark) inset;
}
.search-input:focus{
  box-shadow: -2px -2px 2px 0 var(--shadow-light) inset, 2px 2px 2px 0 var(--shadow-dark) inset;
}
.keywords-list-empty{
  display: flex;
  flex-wrap: wrap;
  transition: 0.3s;
}
.keywords-list{
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  transition: 0.3s;
}
.keywords{
  margin: 5px 5px;
  max-width: 150px;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-gray{
  color: var(--content);
}
.text-gray2{
  color: var(--primary);
}
</style>
