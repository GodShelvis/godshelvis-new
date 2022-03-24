<template>
  <n-slider max="359" @update:value="changeThemeColor"/>
</template>

<script lang="ts" setup>
import { NSlider } from 'naive-ui'
import { primaryColor, hslToRgb, user, bgColor, contentColor, shadowLightColor, shadowDarkColor, shadowInsetColor } from "../../../store/index"

// 改变主题色
const changeThemeColor = function(color:string) {
  // let h:number = Number(color.slice(5,color.indexOf(',')))
  let h:number = Number(color)
  let root = document.querySelector(':root')
  let s = 35
  primaryColor.value = `${hslToRgb(h,s,90)}ff`;
  contentColor.value = `${hslToRgb(h,s,55)}ff`;
  bgColor.value = `${hslToRgb(h,s,75)}ff`;
  shadowLightColor.value = `${hslToRgb(h,s,80)}ff`;
  shadowDarkColor.value = `${hslToRgb(h,s,60)}ff`;
  shadowInsetColor.value = `${hslToRgb(h,s,75)}b2`;
  
  root.style.setProperty('--primary',`hsl(${h}, ${s}%, ${90+h/359*10}%)`)
  root.style.setProperty('--content',`hsl(${h}, ${s}%, ${55+h/359*10}%)`)
  root.style.setProperty('--bg',`hsl(${h}, ${s}%, ${75+h/359*10}%)`)
  root.style.setProperty('--shadow-light',`hsl(${h}, ${s}%, ${80+h/359*10}%)`)
  root.style.setProperty('--shadow-dark',`hsl(${h}, ${s}%, ${60+h/359*10}%)`)
  root.style.setProperty('--shadow-inset',`hsla(${h}, ${s}%, ${60+h/359*10}%, 70%)`)

}
</script>

<style lang="scss">
.n-slider{
  background-image: linear-gradient(90deg, hsl(0, 35%, 75%), hsl(60, 35%, 75%) 16.66%, hsl(120, 35%, 75%) 33.33%, hsl(180, 35%, 75%) 50%, hsl(240, 35%, 75%) 66.66%, hsl(300, 35%, 75%) 83.33%, hsl(0, 35%, 75%));
}
</style>