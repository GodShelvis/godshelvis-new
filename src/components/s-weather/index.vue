<template>
  <div class="no-select weather-area" @mouseenter="enterHover" @mouseleave="leaveHover">
    <div v-if="loadOver">
      <div class="weather">
        <img class="weather-icon" :src="`/weather/${weather.icon}.png`" onerror="this.src='/weather/102.png'" alt="">
        <div class="weather-info">
          <p class="weather-location">{{location}}</p>
          <p class="weather-message">{{weather.temp}}°C</p>
          <p class="weather-message2">{{weather.text}}</p>
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
  location.value = res.content.address
  let positon: {x: number, y: number} = res.content.point
  longitude.value = Number(Number(positon.x).toFixed(2))
  latitude.value = Number(Number(positon.y).toFixed(2))
  weatherApi = `https://devapi.qweather.com/v7/weather/now?location=${longitude.value},${latitude.value}&key=6099ae81fe7a4d508f625c01cebe41a3`

  fly.get(weatherApi).then((res)=>{
    if (res.data.code == 200){
      weather.value = res.data.now
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

<style lang="scss" scoped>
.weather-area{
  color: var(--content);
  width: 350px;
  height: 160px;
  border-radius: 30px;
  background-color: var(--bg);
  border: 5px var(--bg) solid;
  box-sizing: border-box;
  box-shadow: -1px -1px 1px var(--shadow-light), 1px 1px 1px var(--shadow-dark), 0px 0px 0px var(--shadow-light) inset, 0px 0px 0px var(--shadow-dark) inset;
  transition: 0.1s;
}
.weather-area:hover{
  color: var(--primary);
  background-color: var(--bg);
  border: 5px var(--bg) solid;
  box-shadow: -10px -10px 20px var(--shadow-light), 10px 10px 20px var(--shadow-dark), -10px -10px 20px var(--shadow-light) inset, 10px 10px 20px var(--shadow-dark) inset;
}
.weather-icon{
  margin-left: 20px;
  width: 160px;
  transition: 0.3s ease-out;
  -webkit-filter: drop-shadow(-0px -0px -0px var(--shadow-dark));
  filter: drop-shadow(-0px -0px -0px var(--shadow-dark)) brightness(100%) opacity(50%);
}
.weather-area:hover .weather-icon{
  -webkit-filter: drop-shadow(10px 10px 5px var(--shadow-dark)) brightness(105%);
  filter: drop-shadow(10px 10px 5px var(--shadow-dark)) brightness(105%) opacity(100%);
}
.weather-area:hover .weather-info{
  -webkit-filter: drop-shadow(10px 10px 5px var(--shadow-dark));
  filter: drop-shadow(10px 10px 5px var(--shadow-dark));
}
.weather-info{
  width: 160px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s;
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
.weather-message2{
  margin: 0;
  font-size: 16px;
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
</style>
