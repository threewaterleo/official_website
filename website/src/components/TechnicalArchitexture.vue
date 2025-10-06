<template>
  <div>
    <div class="title">
      <div>技术架构</div>
      <img alt="" :src="imageObj.title_icon">
    </div>

    <div class="grid">
      <div v-for="(item, index) in icon" :key="index">
        <img alt="" :src="item.src" />
        <p :style="{color : item.color}">架构{{ index + 1 }}</p>
        <p>-</p>
        <p>{{ item.des }}</p>
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

const icon = [
  {color : 'rgba(112, 45, 255, 1)', src : prop.imageObj.tec_icon1, des: '客户端协同加速，降低延迟，减轻服务压力。' },
  {color : 'rgba(255, 195, 0, 1)', src : prop.imageObj.tec_icon2, des: '全局分布式数据库多活部署、智能路由，确保低延迟、高可用的数据服务。' },
  {color : 'rgba(217, 72, 246, 1)', src : prop.imageObj.tec_icon3, des: '自研服务网格动态路由内容加速，支持 A/B 测试、灰度发布与实时容灾切换。' },
  {color : 'rgba(81, 221, 187, 1)', src : prop.imageObj.tec_icon4, des: '微内核插件化架构，功能以插件方式热插拔，提升扩展性。' },
  {color : 'rgba(68, 210, 255, 1)', src : prop.imageObj.tec_icon5, des: '服务基于AWS Linux内核强化功能以及实时修补，业务逻辑层使用 Java 提高开发效率。' },
  {color : 'rgba(255, 49, 86, 1)', src : prop.imageObj.tec_icon6, des: '微服务拆分设计将系统拆解为多个微服务，降低耦合，提升迭代速度。' },
]
</script>
