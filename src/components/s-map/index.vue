<template>
  <div class="bd-map" id="map" ></div>
</template>
<script lang="ts" setup>
import { reactive, ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import { bgColor, contentColor, primaryColor, shadowInsetColor, shadowLightColor } from '../../store';
import { getMapConfig } from './default-map'

// const ak = 'UM0qhKUufFxQXhGSNuvdSKyhQ6CQ1U36';

const map = reactive({
  mapObj: null
})

const setMapColor = function() {
  map.mapObj.setMapStyleV2({
    styleJson: getMapConfig(bgColor.value,contentColor.value,shadowLightColor.value,primaryColor.value,contentColor.value,shadowInsetColor.value)
  })
}

watch(primaryColor,()=>{
  console.log('setMapColor');
  setMapColor()
})

// const setMapCenter=function (locationX:number, locationY:number) {
//   map.mapObj.centerAndZoom(new BMapGL.Point(locationX,locationY), 16); // 初始化地图,设置中心点坐标和地图级别
// }

onMounted(()=>{
  map.mapObj = new BMapGL.Map('map'); // 创建Map实例
  setMapColor()
  map.mapObj.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  var geolocation = new BMapGL.Geolocation();
  map.mapObj.centerAndZoom(new BMapGL.Point(121.60,31.20), 16);
  geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
      map.mapObj.centerAndZoom(new BMapGL.Point(r.point.lng,r.point.lat), 16); // 初始化地图,设置中心点坐标和地图级别
      // map.mapObj.setMapType(BMAP_EARTH_MAP); //卫星图
    } else {
      console.log('failed' + this.getStatus());
    }        
  });
})
</script>
<style scope>
.bd-map{
  width: 255px;
  height: 160px;
  border-radius: 15px;
  background-color: var(--bg);
  border: 5px var(--bg) solid;
  box-sizing: border-box;
  box-shadow: -1px -1px 2px var(--shadow-light), 1px 1px 2px var(--shadow-dark), 0px 0px 0px var(--shadow-inset) inset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  margin: 25px 0;
}
.bd-map:hover{
  background-color: var(--bg);
  border: 5px var(--bg) solid;
  box-shadow: -10px -10px 20px var(--shadow-light), 10px 10px 20px var(--shadow-dark), 2px 2px 20px var(--shadow-inset) inset;
}
</style>