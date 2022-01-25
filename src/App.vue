<template>
  <!-- <router-view path="/home"></router-view> -->
  <Home></Home>
</template>

<script setup lang="ts">
import Home from './views/home/index'
</script>

<style>
body{
  margin: 0;
  background-color: #F2F2F2;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666666;
  font-family: PingFangSC-Semibold, sans-serif;
  /*margin-top: 60px;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.no-select{
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}

/* @font-face {
  font-family: PingFangSC-Light;
  src: url('/static/fonts/PingFangSC-Light.ttf');
} */
/* @font-face {
  font-family: PingFangSC-Medium;
  src: url('/static/fonts/PingFangSC-Medium.ttf');
} */
/* @font-face {
  font-family: PingFangSC-Regular;
  src: url('/static/fonts/PingFangSC-Regular.ttf');
}
@font-face {
  font-family: PingFangSC-Semibold;
  src: url('/static/fonts/PingFangSC-Semibold.ttf');
} */
/* @font-face {
  font-family: PingFangSC-Thin;
  src: url('/static/fonts/PingFangSC-Thin.ttf');
}
@font-face {
  font-family: PingFangSC-Ultralight;
  src: url('/static/fonts/PingFangSC-Ultralight.ttf');
} */
</style>
