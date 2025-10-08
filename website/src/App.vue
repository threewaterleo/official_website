<template>
  <div :class="{ site_h5 : isPc, site : !isPc }">
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
          <div
              v-for="(item, index) in navList"
              :key="index"
              class="nav-item"
              @click="scrollToSection(item.ref, index)"
              :class="{ selected: selectionNav === index }"
          >
            <p>
              {{ item.label }}
            </p>
            <div class="slider" v-if="selectionNav === index">
              <div class="slider_bottom"></div>
            </div>
          </div>
        </div>

        <div class="item right">
          <div class="lang_index" @click="changeLangBox = !changeLangBox">
            <img class="lang_icon" alt="" :src="imageObj.change_lang">
            <p>{{ langList.find(item => item.abbreviation === lang )?.name }}</p>
            <img class="lang_arrow" :class="{ selected : changeLangBox }" alt="" :src="imageObj.arrow">
          </div>
          <div class="lang_box" v-show="isPc && changeLangBox">
            <div class="lang_item" v-for="(item, index) in langList" @click="changeLanguage(item.abbreviation)"
                 :class="{ selected: lang === item.abbreviation }">
              {{ item.name }}
            </div>
          </div>
          <div class="nav_right" v-if="!isPc">
            <img class="nav_icon" :src="imageObj.nav_close" @click="closeNav" alt="" v-if="navBox">
            <img class="nav_icon" :src="imageObj.nav_open" @click="openNav" alt="" v-else>
          </div>
        </div>
      </div>
    </header>

    <main class="main disable_scrollbar" ref="scrollContainerRef">
      <div class="main_scroll_box">
        <div class="main_top"  ref="homeRef">
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

        <ProductIntroduction ref="productIntroRef" class="main_item des" :imageObj="imageObj" />

        <TechnicalArchitexture ref="techArchRef" class="main_item tec" :imageObj="imageObj" />

        <ProductDisplay ref="productDisplayRef" class="main_item dis" :imageObj="imageObj" />

        <CooperationProcess ref="cooperationProcessRef" class="main_item pro" :imageObj="imageObj" />

        <CooperationPlatform ref="cooperationPlatformRef" class="main_item pla" :imageObj="imageObj" :isPc="isPc" />

        <CommonQuestions ref="commonQuestionsRef" class="main_item que" :imageObj="imageObj" />

        <Footer class="main_item footer" :imageObj="imageObj" />

      </div>
    </main>

    <div class="pop nav" v-if="navBox && !isPc">
      <div class="pop_nav">
        <div v-for="(item, index) in navList"
             :key="index"
             class="nav-item"
             @click="scrollToSection(item.ref, index); closeNav()"
             :class="{ selected: selectionNav === index }"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="pop lang" v-if="changeLangBox && !isPc">
      <div class="pop_lang">

      </div>
    </div>
  </div>
</template>

<script setup>
import CommonQuestions from './components/CommonQuestions.vue'
import CooperationPlatform from './components/CooperationPlatform.vue'
import CooperationProcess from './components/CooperationProcess.vue'
import ProductDisplay from './components/ProductDisplay.vue'
import ProductIntroduction from './components/ProductIntroduction.vue'
import TechnicalArchitexture from './components/TechnicalArchitexture.vue'
import Footer from './components/Footer.vue'

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
import pro_left_img from '@/assets/images/pro_left_img.png'
import pro_icon1 from '@/assets/images/pro_icon1.png'
import pro_icon2 from '@/assets/images/pro_icon2.png'
import pro_icon3 from '@/assets/images/pro_icon3.png'
import pro_icon4 from '@/assets/images/pro_icon4.png'
import pro_icon5 from '@/assets/images/pro_icon5.png'
import pro_icon6 from '@/assets/images/pro_icon6.png'
import blue_arrow from '@/assets/images/blue_arrow.png'
import blue_turn from '@/assets/images/blue_turn.png'
import pla_img from '@/assets/images/pla_img.png'
import pla_img2 from '@/assets/images/pla_img2.png'
import que_img from '@/assets/images/que_img.png'
import que_open_img from '@/assets/images/que_open.png'
import que_close_img from '@/assets/images/que_close.png'
import nav_open from '@/assets/images/nav_open.png'
import nav_close from '@/assets/images/nav_close.png'

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
  pro_left_img,
  pro_icon1,
  pro_icon2,
  pro_icon3,
  pro_icon4,
  pro_icon5,
  pro_icon6,
  blue_arrow,
  blue_turn,
  pla_img,
  pla_img2,
  que_img,
  que_open_img,
  que_close_img,
  nav_open,
  nav_close,
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

const scrollContainerRef = ref(null)

const homeRef = ref(null)
const productIntroRef = ref(null)
const techArchRef = ref(null)
const productDisplayRef = ref(null)
const cooperationProcessRef = ref(null)
const cooperationPlatformRef = ref(null)
const commonQuestionsRef = ref(null)

const selectionNav = ref(0)

const navList = [
  { label: t("frontPage"), ref: homeRef },
  { label: '产品介绍', ref: productIntroRef },
  { label: '技术架构', ref: techArchRef },
  { label: '产品展示', ref: productDisplayRef },
  { label: '合作流程', ref: cooperationProcessRef },
  { label: '合作平台', ref: cooperationPlatformRef },
  { label: '常见问题', ref: commonQuestionsRef }
]

const langList = [
  { abbreviation: 'in', name: 'Indonesian' },
  { abbreviation: 'en', name: 'English' },
  { abbreviation: 'zh', name: 'Chinese' },
]

// 切换语言
const lang = localStorage.getItem('lang') || 'en'
const changeLangBox = ref(false)
const changeLanguage = (str) => {
  if (lang === str) return
  localStorage.setItem('lang', str)
  window.location.reload()
}

// 打开导航弹窗
const navBox = ref(false)
const openNav = () => {
  navBox.value = true
}
const closeNav = () => {
  navBox.value = false
}

function scrollToSection(sectionRef, index) {
  selectionNav.value = index
  const container = scrollContainerRef.value
  const targetEl = sectionRef.value?.$el || sectionRef.value

  if (container && targetEl) {
    const containerTop = container.getBoundingClientRect().top
    const targetTop = targetEl.getBoundingClientRect().top
    const offset = targetTop - containerTop + container.scrollTop

    container.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.documentElement.classList.remove('site_h5');
})
const isPc = ref(false)
handleResize()

function handleResize() {
  const pc = window.innerWidth >= 550
  if (pc !== isPc.value) {
    if (pc) {
      document.documentElement.classList.add('site_h5');
      document.documentElement.classList.remove('site');
    } else {
      document.documentElement.classList.add('site');
      document.documentElement.classList.remove('site_h5');
    }
    isPc.value = pc
  }
}

</script>


<style lang="less" src="@/assets/css/site.less"></style>
<style lang="less" src="@/assets/css/siteH5.less"></style>
