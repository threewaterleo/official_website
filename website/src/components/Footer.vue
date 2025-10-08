<template>
<div>
  <div class="">
  </div>

  <div class="footer_middle">
    <div class="middle_left">
      <img alt="" :src="imageObj.site_icon">
      <div>
        <p>环球科技</p>
        <p>hqkj.com</p>
      </div>
    </div>

    <div class="contact_btn">
      <div>联系我们</div>
      <img alt="" :src="imageObj.white_arrow">
    </div>
  </div>

  <div class="bar"></div>

  <div class="footer_bottom">
    <p>
      Copyright © 2025.All Rights Reserved By 环球科技
    </p>
<!--    <div class="bottom_media">-->
<!--      <div class="media_item" v-for="(item, index) in mediaChannel" :key="index">-->
<!--        <img alt="" :src="item.src">-->
<!--      </div>-->
<!--    </div>-->
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

const mediaChannel = [
  {name: 'fb', src: prop.imageObj.fb_icon},
  {name: 'x', src: prop.imageObj.x_icon},
  {name: 'google', src: prop.imageObj.google_icon},
  {name: 'ins', src: prop.imageObj.ins_icon},
]

</script>
