<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{color: color}">
    <use :xlink:href="iconName"/>
  </svg>
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
    }
})

const iconName = computed(()=>`#icon-${props.name}`);
const svgClass = computed(()=> {
  // console.log(props.name, 'props.name');
  if (props.name) {
        return `svg-custom-icon icon-${props.name}`
      }
      return 'svg-custom-icon'
});
</script>

<style lang='scss'>
.svg-custom-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>