<template>
  <div class="icon-bg">
    <svg-icon class="svg-icon" :name="name" :color="color" @click="redirectTo(url)"></svg-icon>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  }
})

const redirectTo = (url)=>{
  if (url == '' && url == undefined ){
    return
  }
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url
  }
  window.location.href = url
}
</script>

<style>
.icon-bg{
  width: 80px;
  height: 80px;
  margin: 0 6px;
  border-radius: 15px;
  transition: 0.2s ease-out;
  background-image: linear-gradient(to bottom right, #F2F2F2,#F2F2F2);
  box-shadow: -1px -1px 1px 0 #FFFFFF, 1px 1px 1px 0 #B2BBC7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-bg:hover{
  background-image: linear-gradient(to bottom right, #F2F2F2,#F2F2F2);
  box-shadow: -10px -10px 20px #FFFFFF, 10px 10px 20px #B2BBC7;
}
.icon-bg:hover .svg-icon{
  -webkit-filter: drop-shadow(5px 5px 3px #B2BBC7) brightness(105%);
  filter: drop-shadow(5px 5px 3px #B2BBC7) brightness(105%);
}
.icon-bg:active{
  background-image: linear-gradient(to bottom right, #ebebeb,#fafafa);
  box-shadow: -5px -5px 10px #FFFFFF, 5px 5px 10px #B2BBC7;
}
.icon-bg:active .svg-icon{
  -webkit-filter: drop-shadow(3px 3px 2px #B2BBC7) brightness(100%);
  filter: drop-shadow(3px 3px 2px #B2BBC7) brightness(100%);
}
.svg-icon{
  width: 70px;
  height: 100%;
  -webkit-filter: drop-shadow(0px 0px 0px #B2BBC7);
  filter: drop-shadow(0px 0px 0px #B2BBC7);
  transition: 0.3s ease-out;
}
</style>