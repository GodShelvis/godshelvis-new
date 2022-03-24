<template>
  <!-- <router-view path="/home"></router-view> -->
  <Home></Home>
</template>

<script setup lang="ts">
import { onMounted, ref } from '@vue/runtime-core'
import Home from './views/home/index.vue'
import { user, login, UserInfo, primaryColor, contentColor, bgColor, shadowDarkColor, shadowInsetColor, shadowLightColor } from './store'


onMounted(()=>{
  let local = localStorage.getItem("store")  
  if (local && !user.username) {
    let u:UserInfo = JSON.parse(local)
    login(u)
  }
  window.addEventListener("beforeunload",()=>{
    if (user.username) {
      localStorage.setItem("store",JSON.stringify(user))
    }
  })

 let slider = document.querySelector('.n-slider')
 slider.style.setProperty('--n-rail-color','#00000000')
 slider.style.setProperty('--n-rail-color-hover','#00000000')
 slider.style.setProperty('--n-fill-color','#00000000')
 slider.style.setProperty('--n-fill-color-hover','#00000000')
 slider.style.setProperty('--n-handle-size','10px')
 slider.style.setProperty('border-radius','10px')
 slider.style.setProperty('padding','0px')

  primaryColor.value = `#a6b8ceff`;
  contentColor.value = `#9eb2ceff`;
  bgColor.value = `#f2f2f2ff`;
  shadowLightColor.value = `#ffffffff`;
  shadowDarkColor.value = `#B2BBC7ff`;
  shadowInsetColor.value = `#B2BBC7cc`;  
})
</script>

<style lang="scss">
:root{
  --primary: #a6b8ce;
  --content: #9eb2ce;
  --bg: #f2f2f2;
  --shadow-light: #ffffff;
  --shadow-dark: #B2BBC7;
  --shadow-inset: #B2BBC7cc;

  --input-color: var(--primary);
  --input-caret-color: #979FAA;
  --input-placeholder: #d1d8e2;
}
body{
  margin: 0;
  background-color: var(--bg);
  font-weight: 600;
  min-width: 660px;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--content);
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
</style>
