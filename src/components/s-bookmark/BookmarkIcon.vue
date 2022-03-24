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

<style lang="scss">
.icon-bg{
  width: 80px;
  height: 80px;
  margin: 0 6px;
  border-radius: 15px;
  transition: 0.2s ease-out;
  background-image: linear-gradient(to bottom right, var(--bg),var(--bg));
  box-shadow: -1px -1px 1px 0 var(--shadow-light), 1px 1px 1px 0 var(--shadow-dark);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-bg:hover{
  background-image: linear-gradient(to bottom right, var(--bg),var(--bg));
  box-shadow: -10px -10px 20px var(--shadow-light), 10px 10px 20px var(--shadow-dark);
}
.icon-bg:hover .svg-icon{
  -webkit-filter: drop-shadow(5px 5px 3px var(--shadow-dark)) brightness(105%);
  filter: drop-shadow(5px 5px 3px var(--shadow-dark)) brightness(105%);
  --icon-color: var(--none);
  --icon-bg: var(--none);
}
.icon-bg:active{
  background-image: linear-gradient(to bottom right, var(--shadow-dark),var(--shadow-light));
  box-shadow: -5px -5px 10px var(--shadow-light), 5px 5px 10px var(--shadow-dark);
}
.icon-bg:active .svg-icon{
  -webkit-filter: drop-shadow(3px 3px 2px var(--shadow-dark)) brightness(100%);
  filter: drop-shadow(3px 3px 2px var(--shadow-dark)) brightness(100%);
}
.svg-icon{
  width: 70px;
  height: 100%;
  -webkit-filter: drop-shadow(0px 0px 0px var(--shadow-dark));
  /* filter: drop-shadow(0px 0px 0px var(--shadow-dark)); */
  filter: drop-shadow(0px 0px 0px var(--shadow-dark));
  transition: 0.3s ease-out;
  --icon-color: var(--content);
  --icon-bg: var(--bg);
}
</style>