<template>
  <div>
    <div class="title">
      <div>合作流程</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div class="pro-content">
      <img class="pro_left" :src="imageObj.pro_left_img" alt="" />
      <div class="pro_right">
        <div class="pro_right_div">
          <div class="pro_right_item" v-for="(item, index) in items" :key="index">
            <img class="item_img" alt="" :src="item.src">
            <div>{{ item.content }}</div>
          </div>
          <div class="arrow">
            <img v-for="(item, index) in 4" class="arrow_img" alt="" :src="imageObj.blue_arrow">
          </div>
        </div>
        <img alt="" :src="imageObj.blue_turn" class="turn_img" >
      </div>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps({
  imageObj: {
    type: Object,
    required: true,
  },
})

const items = [
  {src: prop.imageObj.pro_icon1, content: '需求沟通'},
  {src: prop.imageObj.pro_icon2, content: '方案制定'},
  {src: prop.imageObj.pro_icon3, content: '建群对接'},
  {src: prop.imageObj.pro_icon4, content: '建站素材'},
  {src: prop.imageObj.pro_icon5, content: '系统搭建'},
  {src: prop.imageObj.pro_icon6, content: '上线验收'},
]
</script>