<template>
  <div :class="`${checkToolname(toolname)?'haschild':''}`">
    <login v-if="keywords.login.includes(toolname)" @trigger-clean="triggerClean"></login>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from "@vue/runtime-core";
import login from "./components/login.vue";

defineProps(['toolname'])
const emit = defineEmit(['trigger-clean'])

// 关键词
const keywords = {
  login: ['login','登录','登陆','logout','登出','注销']
}

// 是否包含至少一个关键词
const checkToolname = (key: String):boolean=>{
  return keywords.login.includes(key.trim())
}

// 触发清空输入框
const triggerClean = ()=>{
  emit('trigger-clean')
}
</script>

<style scoped>
.haschild{
  margin: 25px 0 0 0;
}
</style>