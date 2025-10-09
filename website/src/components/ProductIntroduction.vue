<template>
  <div>
    <div class="title">
      <div>{{ title }}</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div>
      <img alt="" :src="imageObj.product_des">
    </div>

    <div class="">
      <p>{{ $t("productDesP1") }}</p>
      <p>{{ $t("productDesP2") }}</p>
      <p>{{ $t("productDesP3") }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  imageObj: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})
</script>
