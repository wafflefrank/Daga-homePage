<template>
  <!--  navigation 新增分頁箭頭 -->
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    loop
  >
    <swiper-slide>
      <div class="img-border">
        <img src="../../assets/img/Swiper/slider 1.jpg" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img-border">
        <img src="../../assets/img/Swiper/slider 2.jpg" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img-border">
        <img src="../../assets/img/Swiper/slider 3.jpg" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img-border">
        <img src="../../assets/img/Swiper/slider 4.jpg" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import SwiperCore, { Navigation, Pagination, A11y, Scrollbar, Autoplay } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

// 註冊需要的模組
SwiperCore.use([Autoplay, Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      // console.log('slide change')
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #ff8872; /* 两种都可以 */
  --swiper-navigation-color: #ff8872; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 20px; /* 设置按钮大小 */
}
.swiper-slide {
  margin-right: 20px;
}
.img-border {
  width: 100%;
  height: 100%;
  // padding: 10px 20px;
  & img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #fff;
    margin: auto;
    box-shadow: 1px 1px 3px 1px #e7e3e334;
  }
}
</style>
