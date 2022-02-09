<template>
111
  <Swiper style="width: 600px;" :mousewheel="true">
    <swiper-slide>
    </swiper-slide>
  </Swiper>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Mousewheel } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel'

import { user } from "../../store"
import fly from 'flyio';

SwiperCore.use([Mousewheel])

// 如果登录了且有bilibili uid,就加载关注列表
if (user.bilibiliUid) {
  const myFollowApi = `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=${user.bilibiliUid}&type=8`
  console.log(myFollowApi);
  fly.get(myFollowApi,{},{
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "referer": "null"
    }
  }).then((res)=>{
    console.log(res);
  })
}
</script>

<style>

</style>