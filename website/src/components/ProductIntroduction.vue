<template>
  <div>
    <div class="title">
      <div>产品介绍</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div>
      <img alt="" :src="imageObj.product_des">
    </div>

    <div class="">
      <p>环球科技是综合包网业界的一面旗帜，不仅提供移动端、web端。</p>
      <p>基础产品：包括Android、ios、web三端产品，集成了市面上最顶级的三方游戏场馆</p>
      <p>综合后台：业界最全面、操作最便捷、体验最友好的综合后台系统，助您轻松管理您的网站。</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  imageObj: {
    type: Object,
    required: true,
  },
})
</script>
