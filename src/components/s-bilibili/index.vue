<template>
  <div class="bilibili-space">
    <Swiper v-if="followLoadOK" style="width: 600px;" :mousewheel="true">
      <swiper-slide v-for="(list,index) in video.page" :key="index">
        <div class="card-group">
          <div class="card" v-for="(card, index) in list" :key="index">
            <img class="card-image" :src="decodeCard(card.card).pic" alt="">
            <p class="card-title">{{decodeCard(card.card).title}}</p>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
    <div v-else class="bind" style="width: calc( 100% - 60px );">
      <input class="sessdata-input" placeholder="请先绑定SESSDATA" v-model="sessdata">
      <div class="bind-button no-select" @click="submitBind(sessdata, user.bilibiliUid)">
        <p>绑定</p>
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
    console.log(res);
    if (res.data.code == -6) {
      followLoadOK.value = false
    } else if (res.data.code == 0) {
      newnum.value = res.data.data.new_num
      video.page = []
      for (let i = 0; i < res.data.data.cards.length/3; i++) {
        let arr:Array<Object> = []
        for (let j = 0; j < 3; j++) {
          if (i*3+j<res.data.data.cards.length) {            
            arr.push(res.data.data.cards[i*3+j])
          }
        }        
        video.page.push(arr)
      }
      console.log(video.page);
      
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
  console.log(card);
  return card;
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

<style>
.bilibili-space{
  width: 100%;
  margin: 0 0 30px 0;
}
.bind{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 30px 0 30px;
}
.sessdata-input{
  width: calc( 100% - 120px );
  height: 50px;
  background-color: #F2F2F2;
  border-radius: 5px;
  box-shadow: -2px -2px 2px 0 #FFFFFF inset, 2px 2px 2px 0 #B2BBC7 inset;
  border: none;
  outline: none;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
  text-shadow: -2px -2px 2px #FFFFFF, 2px 2px 2px #B2BBC7;
  caret-color: #979FAA;
  color: #5D6268;
}
.sessdata-input::-webkit-input-placeholder{
  text-shadow: none;
  color: #D1D8E2;
}
.bind-button{
  width: 90px;
  height: 50px;
  background-color: #E3EFFC;
  border-radius: 5px;
  color: #95B9E8;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.card-group{
  width: 540px;
  padding: 30px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card{
  width: 160px;
}
.card-image{
  width: 160px;
  border-radius: 5px;
}
.card-title{
  width: 160px;
  height: 34px;
  font-size: 12px;
  margin-block-start: 5px;
  margin-block-end: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>