// import './assets/main.css'
import './assets/bootstrap.css'
import './assets/templates.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css' // 导入 Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'
// 載入bootstrap全部js功能
// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap'
import Vue3Marquee from 'vue3-marquee' // 跑馬燈
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入 Element Plus 的 CSS
// swiper
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(Vue3Marquee)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
