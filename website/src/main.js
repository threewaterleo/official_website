import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';
import './assets/css/main.less'
import App from './App.vue'
import {lang} from './i18n/lang.js'

const messages = {
    en: lang.en,
    id: lang.id,
    zh: lang.zh,
}
const storedLocale = localStorage.getItem('lang') || 'en'; // 默认语言为印尼

const i18n =createI18n({
    locale: storedLocale,
    messages,
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(i18n)

app.mount('#app')
