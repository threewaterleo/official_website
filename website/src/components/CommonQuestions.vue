<template>
  <div>
    <div class="title">
      <div>常见问题</div>
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

const prop = defineProps({
  imageObj: {
    type: Object,
    required: true,
  },
})

const activeNames = ref(0)

const questions = [
  {
    title: '我需要什么样的网速来运行系统？',
    content: '运行系统的基本要求是只需连接互联网即可。我们的下载系统会根据您的网络连接情况，决定在开始游戏前需要下载多少游戏内容。\n\n' +
        '这意味着，如果您的网络连接速度很快，由于下载量较少，游戏启动速度会更快。如果您的网络连接速度较慢，由于下载量较大，游戏启动速度会更慢。但这是为了确保您无论使用何种网络连接速度，都能顺利玩游戏。\n\n ' +
        '如果您想进一步了解该系统如何运作，请发送电子邮件至hqkj@google.com。'
  },
  {title: '平台可以在手机、Mac 和 Windows 上运行吗？', content: '111'},
  {title: '平台上有哪些类型的游戏？', content: '222'},
  {title: '我可以随心所欲地玩吗？', content: '111'},
]

const clickQuestions = (index) => {
  if (index === activeNames.value) {
    activeNames.value = null
  } else {
    activeNames.value = index
  }
}

</script>

