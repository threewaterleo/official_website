<template>
  <div>
    <div class="title">
      <div>{{ title }}</div>
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
import {useI18n} from "vue-i18n";
const {t, locale} = useI18n();

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

const items = [
  {src: prop.imageObj.pro_icon1, content: t("processDes1")},
  {src: prop.imageObj.pro_icon2, content: t("processDes2")},
  {src: prop.imageObj.pro_icon3, content: t("processDes3")},
  {src: prop.imageObj.pro_icon4, content: t("processDes4")},
  {src: prop.imageObj.pro_icon5, content: t("processDes5")},
  {src: prop.imageObj.pro_icon6, content: t("processDes6")},
]
</script>