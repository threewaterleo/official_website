import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';
import './assets/css/main.less'
import App from './App.vue'
import {lang} from './i18n/lang.js'
import { Collapse, CollapseItem } from 'vant';

const messages = {
    en: lang.en,
    in: lang.in,
    zh: lang.zh,
}
const storedLocale = localStorage.getItem('lang') || 'en'; // 默认语言为印尼

const i18n =createI18n({
    locale: storedLocale,
    messages,
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(i18n).use(Collapse).use(CollapseItem)

app.mount('#app')
