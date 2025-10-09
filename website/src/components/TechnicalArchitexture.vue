<template>
  <div>
    <div class="title">
      <div>{{ title }}</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div class="grid">
      <div v-for="(item, index) in icon" :key="index">
        <div class="grid_icon">
          <img alt="" :src="item.src" />
        </div>
        <p :style="{color : item.color}">{{ $t("architecture") }}{{ index + 1 }}</p>
        <p>-</p>
        <p>{{ item.des }}</p>
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

const icon = [
  {color : 'rgba(112, 45, 255, 1)', src : prop.imageObj.tec_icon1, des: t("technicalDesP1") },
  {color : 'rgba(255, 195, 0, 1)', src : prop.imageObj.tec_icon2, des: t("technicalDesP2") },
  {color : 'rgba(217, 72, 246, 1)', src : prop.imageObj.tec_icon3, des: t("technicalDesP3") },
  {color : 'rgba(81, 221, 187, 1)', src : prop.imageObj.tec_icon4, des: t("technicalDesP4") },
  {color : 'rgba(68, 210, 255, 1)', src : prop.imageObj.tec_icon5, des: t("technicalDesP5") },
  {color : 'rgba(255, 49, 86, 1)', src : prop.imageObj.tec_icon6, des: t("technicalDesP6") },
]
</script>
