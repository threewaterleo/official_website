<template>
  <div>
    <div class="title">
      <div>产品展示</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div class="dis_des">
      精美新颖的UI主题，流畅丝滑的交互操作，强大稳定的服后台务，全方位打造绝佳游戏体验。
    </div>

    <div class="carousel">
      <Carousel :slides="slideData" direction="right" :interval="4000">
        <template #default="{ slide }">
        </template>
      </Carousel>
    </div>

    <div class="contact_btn">
      <div>联系我们</div>
      <img alt="" :src="imageObj.white_arrow">
    </div>

  </div>
</template>

<script setup>
import Carousel from './pop/swiper.vue'
import home_page1 from "@/assets/images/home_page1.png";

const prop = defineProps({
  imageObj: {
    type: Object,
    required: true,
  },
})

const slideData = [
  { id: 1, src: prop.imageObj.home_page1 },
  { id: 2, src: prop.imageObj.home_page2 },
  { id: 3, src: prop.imageObj.home_page3 },
  { id: 4, src: prop.imageObj.home_page4 },
  { id: 5, src: prop.imageObj.home_page5 },
  { id: 6, src: prop.imageObj.home_page1 },
  { id: 7, src: prop.imageObj.home_page2 },
  { id: 8, src: prop.imageObj.home_page3 },
  { id: 9, src: prop.imageObj.home_page4 },
  { id: 10, src: prop.imageObj.home_page5 },
]
</script>
