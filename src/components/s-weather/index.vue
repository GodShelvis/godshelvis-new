<template>
  <div class="no-select weather-area" @mouseenter="enterHover" @mouseleave="leaveHover">
    <div v-if="loadOver">
      <div class="weather">
        <img class="weather-icon s1" :src="`/static/s2/${weather.icon}.png`" alt="">
        <div class="weather-info">
          <p class="weather-location">{{location}}</p>
          <p class="weather-message">{{weather.temp}}°C {{weather.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import fly from 'flyio'

let longitude = ref(121.60);
let latitude = ref(31.20);
let location = ref('');
let weather = ref({});
let weatherApi:string
let loadOver = ref(false)
let hoverStatus = ref(false)

import { jsonp } from 'vue-jsonp'

jsonp('https://api.map.baidu.com/location/ip?ak=UM0qhKUufFxQXhGSNuvdSKyhQ6CQ1U36&coor=bd09ll').then(res => {
  console.log(res)
  location.value = res.content.address
  let positon: {x: number, y: number} = res.content.point
  longitude.value = Number(positon.x).toFixed(2)
  latitude.value = Number(positon.y).toFixed(2)
  weatherApi = `https://devapi.qweather.com/v7/weather/now?location=${longitude.value},${latitude.value}&key=6099ae81fe7a4d508f625c01cebe41a3`

  fly.get(weatherApi).then((res)=>{
    if (res.data.code == 200){
      weather.value = res.data.now
      console.log(weather.value)
      loadOver.value = true
    }
  }).catch((err)=>{
    console.log(err)
  })
})

const enterHover = function () {
  hoverStatus.value = false
}

const leaveHover = function () {
  hoverStatus.value = true
}

</script>

<style scoped>
.weather-area{
  width: 350px;
  height: 160px;
  border-radius: 30px;
  background-color: #f2f2f2;
  border: 0px #f2f2f2 solid;
  box-sizing: border-box;
  box-shadow: -1px -1px 1px #FFFFFF, 1px 1px 1px #BEBEBE, 0px 0px 0px #97C8EB inset, 0px 0px 0px #1D6A9F inset;
  transition: 0.2s;
}
.weather-area:hover{
  color: #485156;
  background-color: #CDE7F6;
  border: 5px #F2F2F2 solid;
  box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 30px #BEBEBE, -10px -10px 30px #97C8EB inset, 10px 10px 30px #1D6A9F inset;
}
.weather-icon{
  margin-left: 0;
  width: 160px;
  /* background-color: #fff; */
}
.weather-info{
  width: 160px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.weather-location{
  margin: 0 0 5px 0;
  font-size: 15px;
}
.weather-message{
  margin: 0;
  font-size: 35px;
}

.weather{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.weather-active{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
s1-enter-from,
s1-leave-to{
 opacity: 0;
}
s1-leave-from,
s1-enter-to{
  opacity: 1;
}
s1-enter-active{
  transition: all 0.1s ease-in;
}
</style>
