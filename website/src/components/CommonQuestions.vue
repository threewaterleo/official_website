<template>
  <div>
    <div class="title">
      <div>{{ title }}</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div class="que_content">
      <div class="que_box">
        <div class="que_item" v-for="(item, index) in questions">
            <div class="que_item_title">
              <div>{{ item.title }}</div>
              <img alt="" :src="index === activeNames?imageObj.que_close_img:imageObj.que_open_img"
                   @click="clickQuestions(index)">
            </div>
          <transition name="slide-down">
            <div class="que_item_content" v-show="index === activeNames">
              {{ item.content }}
            </div>
          </transition>
        </div>
      </div>

      <img class="que_img" alt="" :src="imageObj.que_img">
    </div>

  </div>
</template>

<script setup>
import {ref, nextTick} from "vue";
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

const activeNames = ref(0)

const questions = [
  {title: t("questionTitle1"), content: t("questionAnswer1")},
  {title: t("questionTitle2"), content: t("questionAnswer2")},
  {title: t("questionTitle3"), content: t("questionAnswer3")},
  {title: t("questionTitle4"), content: t("questionAnswer4")},
]

const clickQuestions = (index) => {
  if (index === activeNames.value) {
    activeNames.value = null
  } else {
    activeNames.value = index
  }
}

</script>

