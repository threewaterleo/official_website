<template>
  <div class="site" :class="{ site_h5 : isPc }">
    <header class="header" >
      <div class="header_content">
        <div class="item left">
          <img alt="" :src="imageObj.site_icon">
          <div>
            <p>环球科技</p>
            <p>hqkj.com</p>
          </div>
        </div>
        <div class="item middle" v-if="isPc">
          <div>首页</div>
          <div>产品介绍</div>
          <div>技术架构</div>
          <div>产品展示</div>
          <div>合作流程</div>
          <div>合作平台</div>
          <div>常见问题</div>
        </div>
        <div class="item right">
          <img alt="" :src="imageObj.change_lang">
          <p>Chinese</p>
          <img alt="" :src="imageObj.arrow">
        </div>
      </div>
    </header>

    <main class="main disable_scrollbar">
      <div class="main_scroll_box">
        <div class="main_top">
          <div class="main_top_left">
            <p>综合包网</p>
            <p>全网条件最低</p>
            <p>
              迄今为止全球范围内服务最全面、投入研发资金量最大、最令客户省心的包网技术服务综合供应商。
            </p>
            <div class="contact_btn">
              <div>联系我们</div>
              <img alt="" :src="imageObj.white_arrow">
            </div>
            <div class="contact_channel">
              <div v-for="(item, index) in contactChannel" :key="index">
                <img alt="" :src="item.src">
              </div>
            </div>
          </div>
          <div class="main_top_right">
            <img alt="" :src="imageObj.home_right">
          </div>
        </div>

        <ProductIntroduction class="main_item des" :imageObj="imageObj" />

        <TechnicalArchitexture class="main_item tec" :imageObj="imageObj" />

        <ProductDisplay class="main_item dis" :imageObj="imageObj" />

        <CooperationProcess class="main_item pro" :imageObj="imageObj" />

        <CooperationPlatform class="main_item pla" :imageObj="imageObj" />

        <CommonQuestions class="main_item que" :imageObj="imageObj" />

        <footer>

        </footer>
      </div>
    </main>
  </div>
</template>

<script setup>
import CommonQuestions from './components/CommonQuestions.vue'
import CooperationPlatform from './components/CooperationPlatform.vue'
import CooperationProcess from './components/CooperationProcess.vue'
import ProductDisplay from './components/ProductDisplay.vue'
import ProductIntroduction from './components/ProductIntroduction.vue'
import TechnicalArchitexture from './components/TechnicalArchitexture.vue'

import site_icon from '@/assets/images/side_logo.png'
import change_lang from '@/assets/images/header_lang.png'
import arrow from '@/assets/images/Vector.png'
import home_right from '@/assets/images/right_pic.png'
import white_arrow from '@/assets/images/white_right_arrow.png'
import fb_icon from '@/assets/images/facebook.png'
import x_icon from '@/assets/images/x.png'
import ins_icon from '@/assets/images/instagram.png'
import google_icon from '@/assets/images/google.png'
import title_icon from '@/assets/images/Group.png'
import product_des from '@/assets/images/product_des.png'
import tec_icon1 from '@/assets/images/tec_icon1.png'
import tec_icon2 from '@/assets/images/tec_icon2.png'
import tec_icon3 from '@/assets/images/tec_icon3.png'
import tec_icon4 from '@/assets/images/tec_icon4.png'
import tec_icon5 from '@/assets/images/tec_icon5.png'
import tec_icon6 from '@/assets/images/tec_icon6.png'
import home_page1 from '@/assets/images/home_page1.png'
import home_page2 from '@/assets/images/home_page2.png'
import home_page3 from '@/assets/images/home_page3.png'
import home_page4 from '@/assets/images/home_page4.png'
import home_page5 from '@/assets/images/home_page5.png'


const imageObj = {
  site_icon,
  change_lang,
  arrow,
  home_right,
  white_arrow,
  fb_icon,
  x_icon,
  ins_icon,
  google_icon,
  title_icon,
  product_des,
  tec_icon1,
  tec_icon2,
  tec_icon3,
  tec_icon4,
  tec_icon5,
  tec_icon6,
  home_page1,
  home_page2,
  home_page3,
  home_page4,
  home_page5,
}
const contactChannel = [
  {name: 'fb', src: fb_icon},
  {name: 'ins', src: ins_icon},
  {name: 'x', src: x_icon},
  {name: 'google', src: google_icon},

]

import {useI18n} from "vue-i18n";
import {isMobile} from "./utils/index.js"
import {onMounted, onUnmounted, ref} from "vue";

const {t, locale} = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.documentElement.classList.remove('site_h5');
  const app = document.querySelector('#new_app');
  if (app) app.id = 'app'
})
const isPc = ref(false)
handleResize()
function handleResize() {
  const pc = window.innerWidth >= 550
  if (pc !== isPc.value) {
    if (pc) {
      document.documentElement.classList.add('site_h5');
    } else {
      document.documentElement.classList.remove('site_h5');
    }
    isPc.value = pc
  }
}

</script>


<style lang="less" src="@/assets/css/site.less"></style>
<style lang="less" src="@/assets/css/siteH5.less"></style>
