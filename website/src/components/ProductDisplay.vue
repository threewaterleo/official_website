<template>
  <div>
    <div class="title">
      <div>{{ title }}</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div class="dis_des">
      {{ $t("displayDes") }}
    </div>

    <div class="carousel">
      <Carousel :slides="slideData" direction="right" :interval="4000">
        <template #default="{ slide }">
        </template>
      </Carousel>
    </div>

    <div class="contact_btn">
      <div>{{ $t("contactUs") }}</div>
      <img alt="" :src="imageObj.white_arrow">
    </div>

  </div>
</template>

<script setup>
import Carousel from './pop/swiper.vue'

const prop = defineProps({
  imageObj: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

const slideData = [
  { id: 1, src: prop.imageObj.home_page1 },
  { id: 2, src: prop.imageObj.home_page2 },
  { id: 3, src: prop.imageObj.home_page3 },
  { id: 4, src: prop.imageObj.home_page4 },
  { id: 5, src: prop.imageObj.home_page5 },
]
</script>
