<template>
<div class="translate-area">
  <div class="translate-input">
    <div class="input-area">
      <input class="real-input" spellcheck =“false” type="text" v-model="transConfig.q" @keydown.enter="translate(transConfig.q)">
    </div>
    <div class="translate-button" @click="translate(transConfig.q)">
      <img style="width: 30px; height: 30px; margin: 8px" src="./assets/translate.png" alt="">
    </div>
  </div>
  <p :class="`translate-output${output == ''?'-before':''} ${copied?'copied':''}`" @contextmenu.prevent="cleanOutput" v-clipboard="output.trim()" v-clipboard:success="copySuccess">
    {{ output }}
  </p>
</div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import md5 from 'js-md5/src/md5';
import fly from 'flyio'
import { jsonp } from 'vue-jsonp'

let output = ref('')
// 是否已复制,控制翻译颜色
let copied = ref(false)
let transConfig = reactive({
  q: '',
  from: 'auto',
  to: '',
  appid: '20211130001014730',
  salt: 'shelvis',
  sign: ''
})

const cleanOutput = ()=>{
  output.value = ''
  copied.value = false
}
const translate = (input:string)=>{
  if (input == '') {
    output.value = ''
    copied.value = false
  } else {
    copied.value = false
    transConfig.q = input.trim()
    let sign = createSign(transConfig.q,transConfig.appid,transConfig.salt)
    transConfig.sign = sign
    if(/.*[\u4e00-\u9fa5]+.*$/.test(input)) {
      transConfig.to = 'en'
    } else {
      transConfig.to = 'zh'
    }
    jsonp('https://fanyi-api.baidu.com/api/trans/vip/translate',transConfig).then(res => {
      if(res.error_code == undefined) {
        output.value = res.trans_result[0].dst
      } else if(res.error_code == 54004) {
        output.value = '今日次数已用完.'
      } else {
        output.value = '接口异常请联系管理员.'
      }
    })
  }
}

const createSign = (q:String, appid: String, salt: String)=>{
  if (q == '') {
    output.value = ''
  } else {
    let sign = `${appid}${q}${salt}pHAAiPR_e8ZRT5l9zSQU`;
    let encodeSign = md5(sign)
    return encodeSign
  }
}

const copySuccess = () =>{
  copied.value = true
}
</script>

<style scoped>
.translate-area{
  width: 100%;
  /*min-height: 130px;*/
  background: var(--bg);
  border-radius: 30px;
  transition: 0.2s;
  box-shadow: -1px -1px 1px var(--shadow-light), 1px 1px 1px var(--shadow-dark);
  display: flex;
  flex-direction: column;
}
.translate-area:hover{
  box-shadow: -10px -10px 20px var(--shadow-light), 10px 10px 20px var(--shadow-dark);
}
.translate-input{
  width: calc( 100% - 10px );
  height: 50px;
  background: var(--bg);
  border-radius: 25px;
  margin: 5px;
  box-shadow: 0px 0px 0px var(--shadow-light) inset, 0px 0px 0px var(--shadow-dark) inset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 0.2s;
}
.translate-input:hover{
  box-shadow: -1px -1px 3px var(--shadow-light) inset, 1px 1px 3px var(--shadow-dark) inset;
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
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, sans-serif;
  padding-left: 18.5px;
  caret-color: var(--input-caret-color);
  color: var(--input-color);
  background-color: transparent;
}
.translate-button{
  width: 46px;
  height: 46px;
  background-color: var(--primary);
  border-radius: 23px;
  box-shadow: -0px -0px 0px var(--shadow-light), 0px 0px 0px var(--shadow-dark);
  transition: 0.2s;
}
.translate-button:hover{
  box-shadow: -2px -2px 2px var(--shadow-light), 2px 2px 2px var(--shadow-dark);
}
.translate-button:active{
  box-shadow: -0px -0px 0px var(--shadow-light), 0px 0px 0px var(--shadow-dark);
}
.translate-output-before{
  width: 100%;
  text-align: start;
  margin: 0px 23px;
  font-size: 18px;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, sans-serif;
  color: var(--primary);
  transition: 0.2s linear;
}
.translate-output{
  width: 100%;
  text-align: start;
  margin: 5px 23px 15px;
  font-size: 18px;
  font-weight: 600;
  font-family: PingFangSC-Regular, Microsoft YaHei, sans-serif;
  color: var(--primary);
  transition: 0.2s linear;
}
.copied{
  color: var(--content);
}
</style>
