<template>
  <div class="weather-area no-select">
    <img v-if="loadOver" class="weather-icon" :src="`/static/s2/${weather.icon}.png`" alt="">
    <div v-if="loadOver" class="weather-info">
      <p class="weather-location">{{location.adm1}}/{{location.name}}</p>
      <p class="weather-message">{{weather.temp}}°C {{weather.text}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import fly from 'flyio'

let longitude = ref(121.60);
let latitude = ref(31.20);
let location = ref({});
let weather = ref({});
let locationApi:string
let weatherApi:string
let loadOver = ref(false)

navigator.geolocation.getCurrentPosition((positon)=>{
  longitude.value = Number(positon.coords.longitude.toFixed(2))
  latitude.value = Number(positon.coords.latitude.toFixed(2))
  locationApi = `https://geoapi.qweather.com/v2/city/lookup?location=${longitude.value},${latitude.value}&key=6099ae81fe7a4d508f625c01cebe41a3`
  weatherApi = `https://devapi.qweather.com/v7/weather/now?location=${longitude.value},${latitude.value}&key=6099ae81fe7a4d508f625c01cebe41a3`
  
  fly.get(locationApi).then((res)=>{
    if (res.data.code == 200){
      location.value = res.data.location[0]
      fly.get(weatherApi).then((res)=>{
        if (res.data.code == 200){
          weather.value = res.data.now
          console.log(weather.value)
          loadOver.value = true
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  }).catch((err)=>{
    console.log(err)
  })
},(err)=>{
  console.log(err);
})

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.weather-area:hover{
  background-color: #CDE7F6;
  border: 5px #F2F2F2 solid;
  box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 30px #BEBEBE, -10px -10px 30px #97C8EB inset, 10px 10px 30px #1D6A9F inset;
}
.weather-icon{
  margin-left: 0;
  width: 160px;
  /* background-color: #fff; */
}
.s1{
  margin: 0 20px;
  width: 120px;
}
.weather-info{
  width: 120px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.weather-location{
  margin: 0 0 10px 0;
  font-size: 13px;
}
.weather-message{
  margin: 0;
  font-size: 25px;
}
</style>
