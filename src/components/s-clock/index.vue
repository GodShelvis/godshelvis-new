<template>
  <div class="clock-area no-select">
    <p class="clock-title">时钟</p>
    <p class="hhmm led">{{hhmm}}</p>
    <p class="ss led">{{ss}}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 创建变量储存时间并初始化
const hhmm = ref("00:00");
const ss = ref("00");
// 创建变量传递方法
const getNowTime = () => {
  const now = new Date();
  // 时间字符串格式化（如果是一位数则前置0）
  const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  const minu =
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  const sec =
      now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
  // 拼接时间并储存在变量中
  hhmm.value = `${hour}:${minu}`;
  ss.value = `${sec}`;
  // 实现时钟自走效果
  setTimeout(getNowTime, 1000);
};
getNowTime()
</script>

<style lang="scss" scoped>
.clock-area{
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: var(--bg);
  border: 5px var(--bg) solid;
  box-sizing: border-box;
  box-shadow: -1px -1px 2px var(--shadow-light), 1px 1px 2px var(--shadow-dark), 0px 0px 0px var(--shadow-inset) inset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  color: var(--content);
}
.clock-area:hover{
  background-color: var(--bg);
  border: 5px var(--bg) solid;
  box-shadow: -10px -10px 20px var(--shadow-light), 10px 10px 20px var(--shadow-dark), 1px 1px 0px var(--shadow-inset) inset;
}
.clock-area:hover p{
  color: var(--primary);
}
.clock-title{
  margin: 0;
  font-size: 15px;
  line-height: 21px;
}
.hhmm{
  margin: 0;
  font-size: 50px;
  line-height: 53px;
}
.ss{
  margin: 0;
  font-size: 25px;
  line-height: 27px;
}
.led{
  font-family: led;
  font-weight: normal;
}
@font-face {
  font-family: led;
  src: url('./assets/LED.ttf');
}
</style>
