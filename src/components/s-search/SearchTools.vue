<template>
  <div :class="`${checkToolname(toolname)?'haschild':''}`">
    <login v-if="keywords.login.includes(toolname)" @trigger-clean="triggerClean"></login>
    <SThemeColor v-show="keywords.colorful.includes(toolname)"></SThemeColor>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "@vue/runtime-core";
import login from "./components/login.vue";
import SThemeColor from './components/theme-color.vue'

defineProps(['toolname'])
const emit = defineEmits(['trigger-clean'])

// 关键词
const keywords = {
  login: ['login','登录','登陆','logout','登出','注销'],
  colorful: ['color','主题','颜色','色彩']
}

// 是否包含至少一个关键词
const checkToolname = (key: String):boolean=>{
  return keywords.login.includes(key.trim()) || keywords.colorful.includes(key.trim())
}

// 触发清空输入框
const triggerClean = ()=>{
  emit('trigger-clean')
}
</script>

<style scoped>
.haschild{
  margin: 25px 0 0 0;
  min-height: 30px;
}
</style>