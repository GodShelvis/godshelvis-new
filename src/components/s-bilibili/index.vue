<template>
  <div class="bilibili-space">
    <!-- <iframe v-if="currentAid!=''" class="bili-player" :src="`//player.bilibili.com/player.html?aid=${currentAid}`"> </iframe> -->
    <Swiper v-if="followLoadOK" style="width: 315px;padding: 25px 0" :mousewheel="true">
      <swiper-slide v-for="(card,index) in video.page" :key="index">
        <div class="card-group">
          <div class="card" @click="jumpToVideo(card.aid)">
            <img class="card-image" :src="card.pic" alt="">
            <p class="card-title no-select">{{card.title}}</p>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
    <div v-else class="bind">
      <input class="sessdata-input" placeholder="绑定SESSDATA后使用" v-model="sessdata">
      <div class="bind-button no-select" @click="submitBind(sessdata, user.bilibiliUid)">
        <div>获取bilibili关注列表</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Mousewheel } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel'

import { user } from "../../store"
import axios from 'axios';
import { reactive, ref } from '@vue/reactivity';
import { defineEmits } from "@vue/runtime-core";
const emit = defineEmits(['trigger-play'])

SwiperCore.use([Mousewheel])

const followLoadOK = ref(true)
const sessdata = ref('')
const newnum = ref(0)
const video = reactive({
  page: []
})

// 加载关注列表
const loadFollow = (bilibiliUid:string)=>{
  const myFollowApi = `/bilibili/api?uid=${bilibiliUid}&type=8`
  axios({
    url: myFollowApi
  }).then((res)=>{
    // console.log(res);
    if (res.data.code == -6) {
      followLoadOK.value = false
    } else if (res.data.code == 0) {
      newnum.value = res.data.data.new_num
      video.page = []
      
      // 新视频逆序加载, 之后其余顺序加载
      for (let i = newnum.value-1; i >= 0; i--) {
        video.page.push(decodeCard(res.data.data.cards[i].card))
      }
      for (let i = newnum.value; i < res.data.data.cards.length; i++) {
        video.page.push(decodeCard(res.data.data.cards[i].card))
      }
      followLoadOK.value = true
    }
  })
}

//绑定SESSDATA
const submitBind = (sessdata:string, bilibiliUid:string)=>{
  if (sessdata!='') {
    document.cookie = `SESSDATA=${sessdata};`
    loadFollow(bilibiliUid)
  }
}

//解析card
const decodeCard = (info:string)=>{
  let card:Card = JSON.parse(info)
  return card;
}

//
const currentAid = ref('')
const playVideo = (aid:string)=>{
  if (currentAid.value == aid) {
    currentAid.value = ''
    emit('trigger-play',false)
  } else {
    currentAid.value = aid
    emit('trigger-play',true)
  }
}

const jumpToVideo = (aid:number)=>{
  if (currentAid.value != '') {
    currentAid.value = ''
    emit('trigger-play',false)
  } else {
    window.open(`https://www.bilibili.com/video/av${aid}`)
  }
}

// 如果登录了且有bilibili uid,就加载关注列表
if (user.bilibiliUid) {
  loadFollow(user.bilibiliUid)
}


type Card = {
    aid: number, //aid
    attribute: number, //attribute
    cid: number, //cid
    copyright: 1,
    ctime: number, //上传时间,10位
    desc: string, //视频简介
    dimension: {
        height: number, //视频高像素
        rotate: number, //视频旋转角度
        width: number //视频宽像素
    },
    duration: number, //时长(秒)
    dynamic: string, //
    first_frame: string // 第一帧图链接,
    jump_url: string //"bilibili://video/466388858/?page=1&player_preload=null&player_width=1080&player_height=1920&player_rotate=0",
    owner: {
        face: string, //头像链接
        mid: number, //mid
        name: string //up昵称
    },
    pic:string, //封面链接
    share_subtitle: string,//"已观看111.0万次"
    short_link: string,//"https://b23.tv/BV1u5411o7hx",
    short_link_v2: string,//"https://b23.tv/BV1u5411o7hx",
    stat: { //状态
        aid: number, //aid
        coin: number, //投币数
        danmaku: number, //弹幕数
        dislike: number, //不喜欢
        favorite: number, //收藏数
        his_rank: number, //历史最高排名
        like: number, //喜欢数
        now_rank: number, //当前排名
        reply: number, //评论数
        share: number, //分享数
        view: number //播放数
    },
    state: number, //视频状态
    tid: number, //212,
    title: string, //标题
    tname: string //"美食侦探",
    videos: number //包含视频数
}

</script>

<style scoped>
.bilibili-space{
  width: 315px;
  height: 160px;
  margin: 0 0 25px 0;
}
.bind{
  width: 245px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 25px;
}
.sessdata-input{
  width: 223px;
  height: 50px;
  background-color: var(--bg);
  border-radius: 5px;
  box-shadow: -2px -2px 2px 0 var(--shadow-light) inset, 2px 2px 2px 0 var(--shadow-dark) inset;
  border: none;
  outline: none;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
  text-shadow: -2px -2px 2px var(--shadow-light), 2px 2px 2px var(--shadow-dark);
  caret-color: var(--input-caret-color);
  color: var(--input-color);
}
.sessdata-input::-webkit-input-placeholder{
  text-shadow: none;
  color: var(--input-placeholder);
}
.bind-button{
  width: 160px;
  height: 40px;
  background-color: var(--primary);
  border-radius: 5px;
  color: var(--shadow-light);
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 10px;
  transition: 0.2s;
  box-shadow: -1px -1px 2px var(--shadow-light), 1px 1px 2px var(--shadow-dark), 0px 0px 0px var(--shadow-inset) inset;
}
.bind-button:hover{
  box-shadow: -3px -3px 5px var(--shadow-light), 3px 3px 5px var(--shadow-dark), 0px 0px 0px var(--shadow-inset) inset;
}
.card-group{
  height: 160px;
  padding: 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card{
  width: 255px;
  border-radius: 15px;
  background-color: var(--bg);
  border: 5px var(--bg) solid;
  box-sizing: border-box;
  box-shadow: -1px -1px 2px var(--shadow-light), 1px 1px 2px var(--shadow-dark), 0px 0px 0px var(--shadow-inset) inset;
  transition: 0.2s;
}
.card:hover{
  box-shadow: -10px -10px 20px var(--shadow-light), 10px 10px 20px var(--shadow-dark), 0px 0px 0px var(--shadow-inset) inset;
}
.card-image{
  width: 245px;
  height: 150px;
  border-radius: 10px;
  filter: brightness(100%) opacity(30%);
  transition: 0.2s;
  /* transition: 0.3s; */
  /* box-shadow: -1px -1px 1px var(--shadow-light), 1px 1px 1px var(--shadow-dark); */
}
.card:hover .card-image{
  filter: brightness(105%) opacity(100%);
}
.card-title{
  height: 30px;
  text-align: end;
  position: absolute;
  color: white;
  bottom: 0px;
  right: 35px;
  width: 225px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  background-image: linear-gradient(to left top, var(--shadow-inset), var(--shadow-inset));
  font-size: 12px;
  display: -webkit-box;
  /* -webkit-box-orient: vertical; */
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 5px 0;
  transition: 0.2s;
}
.card:hover .card-title{
  background-image: linear-gradient(to left top, #000000, #0000004d);
}
.bili-player{
  width: 570px;
  height: 643px;
  border-radius: 5px;
  margin: 0 0 25px 0;
}
</style>