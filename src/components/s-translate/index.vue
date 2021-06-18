<template>
<div class="translate-area">
  <div class="translate-input">
    <div class="input-area">
      <input class="real-input" type="text" v-model="input" @keydown.enter="translate(input)">
    </div>
    <div class="translate-button" @click="translate(input)">
      <img style="width: 30px; height: 30px; margin: 8px" src="./assets/translate.png" alt="">
    </div>
  </div>
  <div v-if="output != ''" class="translate-output">
    {{ output }}
  </div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

let input = ref('')
let output = ref('')

const translate = (input:String)=>{
  if (input == '') {
    output.value = ''
  } else {
    output.value = 'vt. 翻译；转化；解释；转变为；调动'
  }
}
</script>

<style scoped>
.translate-area{
  width: 100%;
  /*min-height: 130px;*/
  border-radius: 30px;
  transition: 0.2s;
  box-shadow: -1px -1px 1px #FFFFFF, 1px 1px 1px #CECECE;
  display: flex;
  flex-direction: column;
}
.translate-area:hover{
  box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 30px #CECECE;
}
.translate-input{
  width: calc( 100% - 10px );
  height: 50px;
  border-radius: 25px;
  margin: 5px;
  box-shadow: 0px 0px 0px #FFFFFF inset, 0px 0px 0px #CECECE inset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.translate-input:hover{
  box-shadow: -1px -1px 3px #FFFFFF inset, 1px 1px 3px #CECECE inset;
}
.input-area{
  width: calc( 100% - 50px );
  height: 50px;
  border-radius: 25px;
  /*background-color: #ccc;*/
}
.real-input{
  width: calc( 100% - 18.5px );
  height: 50px;
  border: none;
  border-radius: 25px 0 0 25px;
  outline: none;
  font-size: 25px;
  font-family: PingFangSC-Regular, sans-serif;
  padding-left: 18.5px;
  caret-color: #3F3F3F;
  color: #3F3F3F;
  background-color: transparent;
}
.translate-button{
  width: 46px;
  height: 46px;
  background-color: #4C8FED;
  border-radius: 23px;
  box-shadow: -0px -0px 0px #FFFFFF, 0px 0px 0px #CECECE;
  transition: 0.1s;
}
.translate-button:hover{
  box-shadow: -2px -2px 2px #FFFFFF, 2px 2px 2px #CECECE;
}
.translate-button:active{
  box-shadow: -0px -0px 0px #FFFFFF, 0px 0px 0px #CECECE;
}
.translate-output{
  width: 100%;
  text-align: start;
  margin: 5px 23px 15px;
  font-size: 18px;
  font-family: PingFangSC-Medium, sans-serif;
  color: #3F3F3F;
}
</style>
