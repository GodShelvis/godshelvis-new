<template>
  <div v-if="user.username" class="logout-button no-select" @click="submitLogout">
    <p>登出</p>
  </div>
  <div v-else>
    <input type="text" class="username" spellcheck =“false” v-model="username" placeholder="用户名">
    <div class="login">
      <input class="password" placeholder="密码" v-model="password">
      <div class="login-button no-select" @click="submitLogin">
        <p>登录</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { defineEmit } from "@vue/runtime-core";
import { user, login, UserInfo, logout } from "../../../store"


const username = ref('')
const password = ref('')

const emit = defineEmit(['trigger-clean'])

const submitLogin = ()=>{
  if (username.value == 'admin' && password.value == 'admin') {
    let user = new UserInfo({
      username: 'admin',
      bilibiliUid: '36066423',
      vipDeadline: '2099-01-01',
    })
    login(user)
    emit('trigger-clean')
    localStorage.setItem("store",JSON.stringify(user))
    location.reload()
  }
}

const submitLogout = ()=>{
  logout()
  emit('trigger-clean')
  localStorage.clear()
  location.reload()
}
</script>

<style scoped>
.username{
  width: calc( 100% - 20px );
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
.username::-webkit-input-placeholder{
  text-shadow: none;
  color: #D1D8E2;
}
.login{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0 0;
}
.password{
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
.password::-webkit-input-placeholder{
  text-shadow: none;
  color: #D1D8E2;
}
.login-button{
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
.logout-button{
  margin: 25px 0 0 0;
  width: calc( 100% );
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
</style>