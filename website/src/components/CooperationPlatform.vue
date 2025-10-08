<template>
<div>
  <div class="title">
    <div>合作平台</div>
    <img alt="" :src="imageObj.title_icon">
  </div>

  <div class="pla_img">
    <img alt="" :src="imageObj.pla_img" v-if="isPc" >
    <img alt="" :src="imageObj.pla_img2" v-else>
  </div>
</div>
</template>

<script setup>
const prop = defineProps({
  imageObj: {
    type: Object,
    required: true,
  },
  isPc: {
    type: Boolean,
    required: true,
  }
})
</script>
