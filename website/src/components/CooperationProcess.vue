<template>
  <div>
    <div class="title">
      <div>合作流程</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div>
      <img :src="" alt="" />
      <div>

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
</script>