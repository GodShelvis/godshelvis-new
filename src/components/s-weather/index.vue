<template>
  <div class="weather-area">
    <img :src="`./assets/s2/${weather.icon}.png`" alt="">
    {{location.adm1}}/{{location.name}}
    <p>{{weather.icon}} {{weather.temp}}°C {{weather.text}}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import fly from 'flyio'

let longitude = ref(121.60);
let latitude = ref(31.20);
let location = ref({});
let weather = ref({});
navigator.geolocation.getCurrentPosition((positon)=>{
  longitude.value = positon.coords.longitude.toFixed(2)
  latitude.value = positon.coords.latitude.toFixed(2)
})
const locationApi = `https://geoapi.qweather.com/v2/city/lookup?location=${longitude.value},${latitude.value}&key=6099ae81fe7a4d508f625c01cebe41a3`
const weatherApi = `https://devapi.qweather.com/v7/weather/now?location=${longitude.value},${latitude.value}&key=6099ae81fe7a4d508f625c01cebe41a3`
fly.get(locationApi).then((res)=>{
  if (res.data.code == 200){
    location.value = res.data.location[0]
    fly.get(weatherApi).then((res)=>{
      if (res.data.code == 200){
        weather.value = res.data.now
        console.log(weather.value)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
}).catch((err)=>{
  console.log(err)
})

</script>

<style scoped>
.weather-area{
  width: 350px;
  height: 160px;
  border-radius: 30px;
  background-color: #e0f3ff;
  border: 0px #f2f2f2 solid;
  box-sizing: border-box;
  box-shadow: -1px -1px 1px #FFFFFF, 1px 1px 1px #BEBEBE, 0px 0px 0px #97C8EB inset, 0px 0px 0px #1D6A9F inset;
  transition: 0.2s;
}
.weather-area:hover{
  background-color: #CDE7F6;
  border: 5px #F2F2F2 solid;
  box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 30px #BEBEBE, -10px -10px 30px #97C8EB inset, 10px 10px 30px #1D6A9F inset;
}
</style>
