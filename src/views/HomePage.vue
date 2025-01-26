<template>
  <!-- Header -->
  <nav
    class="header_bar navbar navbar-expand-lg navbar-light bg-light"
    :class="{ visible: isVisible, hidden: !isVisible }"
  >
    <!-- 漢堡按鈕 -->
    <button
      class="navbar-toggler me-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- logo -->
    <img class="logo_style" src="../assets/img/daga/logo.png" alt="" />
    <!-- 7個連結圖標 -->
    <div id="navbarNav" class="collapse navbar-collapse msg_style">
      <ul class="navbar-nav fbLink">
        <li class="nav-item_fb">
          <a @click.prevent="goPageOne()" class="nav-link" href="#" target="_blank">
            <img src="../assets/img/daga/1home.png" class="fbLogo" alt="https://www.facebook.com" />
            Trang chủ
          </a>
        </li>

        <li class="nav-item_fb hot">
          <a @click.prevent="goPageTwo()" class="nav-link" href="#" target="_blank">
            <img src="../assets/img/daga/6hoahong.png" class="fbLogo" alt="" />
            CHÍNH SÁCH SALE ONLINE
          </a>
        </li>

        <li class="nav-item_fb">
          <a @click.prevent="goPageThree()" class="nav-link" href="#" target="_blank">
            <img src="../assets/img/daga/2gioithieu.png" class="fbLogo" alt="" />
            Giới thiệu
          </a>
        </li>
        <li class="nav-item_fb hot">
          <a @click.prevent="goPageFour()" class="nav-link" href="#" target="_blank">
            <img src="../assets/img/daga/3loiich.png" class="fbLogo" alt="" />
            Quyền & Lợi ích
          </a>
        </li>

        <li class="nav-item_fb">
          <a @click.prevent="goPageFive()" class="nav-link" href="#" target="_blank">
            <img src="../assets/img/daga/4cauhoi.png" class="fbLogo" alt="" />
            Câu hỏi
          </a>
        </li>

        <li class="nav-item_fb">
          <a @click.prevent="goPageSix()" class="nav-link" href="#" target="_blank">
            <img src="../assets/img/daga/5dangky.png" class="fbLogo" alt="" />
            Hướng dẫn đăng ký
          </a>
        </li>

        <li class="nav-item_fb">
          <a @click.prevent="goPageSeven()" class="nav-link" href="#" target="_blank">
            <img src="../assets/img/daga/lienn-he.png" class="fbLogo" alt="" />
            Liên hệ
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- 黑色麵包項目bar -->
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasMenu"
        aria-controls="offcanvasMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex">
        <button type="submit" class="my-2 breadRight-button1 mx-3">Đăng nhập</button>

        <button type="submit" class="my-2 breadRight-button2">Đăng ký</button>
      </div>
    </div>
  </nav>

  <!-- Offcanvas 左側滑出選單 -->
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasMenu"
    aria-labelledby="offcanvasMenuLabel"
  >
    <div class="offcanvas-header">
      <!-- <h5 class="offcanvas-title" id="offcanvasMenuLabel">選單</h5> -->
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body p-0">
      <div class="mb-4 mx-3">
        <el-input
          class="search_input"
          v-model="input2"
          style="max-width: 400px"
          placeholder="Search..."
        >
          <template #append><i class="fa-solid fa-magnifying-glass fs-6 text-white"></i></template>
        </el-input>
      </div>
      <ul class="list-group offcaanvas_list">
        <li class="list-group-item"><a @click.prevent="goPageOne()" href="#">Trang Chủ</a></li>
        <li class="list-group-item hot">
          <a @click.prevent="goPageTwo()" href="#">Chính Sách Sale Online</a>
        </li>
        <li class="list-group-item"><a @click.prevent="goPageThree()" href="#">Giới Thiệu</a></li>
        <li class="list-group-item hot">
          <a @click.prevent="goPageFour()" href="#">Quyền & Lợi Ích</a>
        </li>
        <li class="list-group-item"><a @click.prevent="goPageFive()" href="#">Câu Hỏi</a></li>
        <li class="list-group-item">
          <a @click.prevent="goPageSix()" href="#">Hướng Dẫn Đăng Ký</a>
        </li>
        <li class="list-group-item"><a @click.prevent="goPageSeven()" href="#">Liên Hệ</a></li>
      </ul>
    </div>
  </div>
  <!-- Close Header -->

  <!-- 外掛影片展示 -->
  <!-- <SlideItem></SlideItem> -->

  <!-- 輪播影片 -->
  <SwiperCarousel />
  <!-- 紅色項目nav -->
  <section class="service-wrapper py-3">
    <div class="service-tag py-5">
      <div class="col-md-12">
        <ul class="nav flex-wrap d-flex justify-content-center">
          <li class="nav-link mx-lg-4">
            <button @click.prevent="goPageOne()" type="submit" class="navSec-button1">
              Trang chủ
            </button>
          </li>
          <li class="nav-link mx-lg-4 special-animation">
            <button @click.prevent="goPageTwo()" type="submit" class="navSec-button1">
              CHÍNH SÁCH SALE ONLINE
            </button>
          </li>
          <li class="filter-btn nav-link mx-lg-4">
            <button @click.prevent="goPageThree()" type="submit" class="navSec-button1">
              Giới thiệu
            </button>
          </li>
          <li class="nav-link mx-lg-4">
            <button @click.prevent="goPageFour()" type="submit" class="navSec-button1">
              Quyền & Lợi ích
            </button>
          </li>
          <li class="nav-link mx-lg-4">
            <button @click.prevent="goPageFive()" type="submit" class="navSec-button1">
              Câu hỏi
            </button>
          </li>
          <li class="nav-link mx-lg-4">
            <button @click.prevent="goPageSix()" type="submit" class="navSec-button1">
              Hướng dẫn đăng ký
            </button>
          </li>
          <li class="nav-link mx-lg-4">
            <button @click.prevent="goPageSeven()" type="submit" class="navSec-button1">
              Liên hệ
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- <div class="spinner-border m-5" role="status">
    <span class="visually-hidden">Loading...</span>
  </div> -->
  <!-- 主體內容 -->
  <div class="text-center loading-overlay" v-if="isLoading">
    <div class="spinner-border text-success" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <router-view></router-view>

  <!-- Start Footer -->
  <footer class="bg-footer pt-4">
    <div class="container">
      <div class="row py-4">
        <div class="col-lg-3 col-12 align-left">
          <a class="navbar-brand" href="index.html">
            <i class="bx bx-buildings bx-sm text-light"></i>
            <span class="text-light h2">DAGA</span>
          </a>
          <div class="d-flex align-items-center mt-3">
            <i class="fa-brands fa-telegram text-white me-2"></i>
            <p class="text-light my-2">TELEGRAM: @DAGA</p>
          </div>
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-phone text-white me-2"></i>
            <p class="text-light my-2">HOTLINE: 0912345678</p>
          </div>
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-envelope text-white me-2"></i>
            <p class="text-light my-2">EMAIL: ADMIN@DAGA.COM</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 my-sm-0 mt-4"></div>

        <div class="col-lg-4 col-md-4 my-sm-0 mt-4">
          <h2 class="h4 pb-lg-3 text-light light-300">Certification</h2>
          <ul class="list-unstyled text-light light-300">
            <li class="pb-2">
              <img class="footer_img1" src="../assets/img/footer/ftr-cert-bmm.webp" alt="#" />
            </li>
            <li class="pb-2">
              <img class="footer_img1" src="../assets/img/footer/ftr-cert-gli.webp" alt="#" />
            </li>
            <li class="pb-2">
              <img class="footer_img1" src="../assets/img/footer/ftr-cert-itech.webp" alt="#" />
            </li>
            <li class="pb-2">
              <img class="footer_img1" src="../assets/img/footer/ftr-cert-tst.webp" alt="#" />
            </li>
            <li class="pb-2">
              <img class="footer_img1" src="../assets/img/footer/ftr-rpsb-18.webp" alt="#" />
            </li>
            <li class="pb-2">
              <img class="footer_img1" src="../assets/img/footer/license-curacao.webp" alt="#" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="w-100 bg-footer2 py-3">
      <div class="container">
        <div class="row pt-2">
          <div class="image-container col-lg-12 col-sm-12">
            <img class="footer_img2" src="../assets/img/footer/1.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/2.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/3.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/4.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/5.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/6.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/7.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/8.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/9.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/10.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/10.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/11.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/12.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/13.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/14.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/15.webp" alt="Image 1" />

            <img class="footer_img2" src="../assets/img/footer/16.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/17.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/18.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/19.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/20.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/21.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/22.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/23.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/24.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/25.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/26.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/27.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/28.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/29.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/30.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/31.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/32.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/33.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/34.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/35.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/36.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/37.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/38.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/39.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/40.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/41.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/42.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/43.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/44.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/45.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/46.webp" alt="Image 1" />
            <img class="footer_img2" src="../assets/img/footer/47.webp" alt="Image 1" />
            <p class="text-lg-center text-center text-light light-300 my-5">
              Copyright 2025 © DAGA
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 右下角固定功能表 -->
    <div class="fixed-action-bar">
      <div class="tg">
        <div class="phone-vr-circle-fill"></div>
      </div>
      <div class="phone-vr-img-circle">
        <a target="_blank" href="https://direct.lc.chat/15293010/">
          <i class="tg_icon fa-brands fa-telegram fs-1 text-white"></i
        ></a>
      </div>
      <div v-if="isBackVisible" class="back-to-top" @click="scrollToTop">
        <i class="fa-regular fa-circle-up fs-1"></i>
        <!-- 使用 FontAwesome 的箭頭圖標 -->
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
import { useColorMode } from '@vueuse/core'
// import SlideItem from '../components/CarouselComponent.vue'
import SwiperCarousel from '../components/Swiper/Carousel_img.vue'

export default {
  components: {
    // SlideItem,
    SwiperCarousel
  },
  data() {
    return {
      input2: '',
      colorMode: useColorMode().value,
      isBackVisible: false, // 控制backtoTop按鈕顯示與隱藏
      isVisible: true, // 控制 Header 顯示或隱藏
      isLoading: false,
      lastScrollTop: 0, // 記錄上一次的滾動位置
      isAnimating: false, // 控制是否正在執行動畫
      // 最新消息列表(測試用)
      translate_News: [
        {
          memberID:
            '近期詐騙猖獗，仿造本網站"ROSA"請勿受騙上當，請認準本網站網址https://www.xxx.com/，任何問題請諮詢客服人員',
          money: 1000
        }
        // { memberID: '13579', money: 2000 },
        // { memberID: '24688', money: 3000 }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll) // 監聽滾動事件
    window.addEventListener('scroll', this.handleBackScroll) // 監聽滾動事件
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll) // 移除滾動監聽
    window.removeEventListener('scroll', this.handleBackScroll) // 卸載時移除事件監聽
  },
  methods: {
    handleScroll() {
      const currentScrollTop = window.scrollY

      // 防止動畫重複執行
      if (this.isAnimating) return

      // 滑動向下，觸發隱藏再顯示
      if (currentScrollTop > this.lastScrollTop) {
        this.isAnimating = true // 標記正在執行動畫
        this.isVisible = false // 隱藏 Header

        // 設置短暫延遲後顯示 Header
        setTimeout(() => {
          this.isVisible = true // 顯示 Header
          this.isAnimating = false // 動畫結束
        }, 400) // 與 CSS transition 時間對應
      }

      // 更新上一次滾動位置
      this.lastScrollTop = currentScrollTop
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滾動
      })
    },
    handleBackScroll() {
      this.isBackVisible = window.scrollY > 200 // 滾動超過 200px 顯示按鈕
    },
    goPageOne() {
      this.$router.push('/page1')
    },
    goPageTwo() {
      this.$router.push('/page2')
    },
    goPageThree() {
      this.$router.push('/page3')
    },
    goPageFour() {
      this.$router.push('/page4')
    },
    goPageFive() {
      this.$router.push('/page5')
    },
    goPageSix() {
      this.$router.push('/page6')
    },
    goPageSeven() {
      this.$router.push('/page7')
    }
  },
  created() {
    // 註冊路由守衛
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true // 顯示加載指示器
      next()
    })

    this.$router.afterEach(() => {
      setTimeout(() => {
        this.isLoading = false // 隱藏加載指示器
      }, 600) // 模擬 0.3 秒的加載時間
    })
  }
}
</script>

<style lang="scss" scoped>
.header_bar {
  // background-color: rgb(70, 117, 135) !important;
  background-color: #fff !important;
  display: flex;
  justify-content: center;
  // flex-flow: row wrap;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 添加陰影效果 */
  position: fixed; /* 固定在螢幕上方 */
  top: 0; /* 距離螢幕頂部 0 */
  left: 0; /* 距離螢幕左側 0 */
  // justify-content: space-between; /* 子項目左右分布 */
  // align-items: center; /* 垂直居中 */
  // padding: 10px 20px; /* 上下左右內距 */
  transition: all 0.5s ease-in-out; /* 添加過渡效果 */
  z-index: 1000; /* 確保在其他元素之上 */
  transform: translateY(0); /* 初始顯示 */
}
/* 隱藏樣式 */
.header_bar.hidden {
  transform: translateY(-100%); /* 滑出畫面 */
}

/* 顯示樣式 */
.header_bar.visible {
  transform: translateY(0); /* 滑回畫面 */
}

// 麵包欄右邊2個按鈕連結
.breadRight-button1 {
  /* width: 100%; */
  padding: 12px;
  background: #b98e49;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 7px 20px;
}
.breadRight-button1:hover {
  background: #795d30;
  transition: 0.3s;
}
.breadRight-button2 {
  /* width: 100%; */
  padding: 12px;
  background: #b20000;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 7px 20px;
}
.breadRight-button2:hover {
  background: #7e0101;
  transition: 0.3s;
}
// navbar 第二行樣式
.navSec-button1 {
  border: 0px solid #ff5722;
  padding: 12px 20px;
  font-weight: bold;
  background: linear-gradient(92.53deg, #b7042c 29.73%, #e8641b 97.09%);
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  // line-height: 53px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0;
  transition:
    background-color 0.3s,
    transform 0.3s;
}
.navSec-button1:hover {
  background: linear-gradient(92.53deg, #6e031a 29.73%, #a0491b 97.09%);
  transform: scale(1.05); /* 加一點放大效果 */
}
// search 鈕樣式
.search_input :deep(.el-input-group__append) {
  cursor: pointer;
  background: #b98e49;
  // & :hover {
  //   background: #775b2f;
  // }
}
.search_input :deep(.el-input-group__append:hover) {
  cursor: pointer;
  background: #624d28;
  // & :hover {
  //   background: #775b2f;
  // }
}
// 展開樣式
.offcanvas {
  width: 300px !important;
}
.offcaanvas_list li {
  border: none !important;
  border-top: 2px solid #ececec !important;
  padding: 12px 0 12px 20px;
  text-align: left !important;
  & a {
    color: hsla(0, 0%, 40%, 0.85);
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s;
    font-size: 14px;
  }
}
.offcaanvas_list li:hover {
  background: #e1e1e1;
  transition: 0.5s;
  & a {
    color: hsla(0, 0%, 17%, 0.85);
  }
}
// 廣播
.marquee_style {
  // flex: 1;
  // display: flex;
  // text-align: center;
  margin-right: 100px;
  & .borderStyle {
    max-width: 100%;
    width: 650px;
  }
  // 廣播字體
  & .marquee-item {
    margin-right: 10px;
    font-size: 14px;
  }
}
// FB logo
.fbLink {
  // 社群icon間距
  .nav-item_fb {
    margin: 0 20px; /* 添加左右間距 */
    & a {
      display: flex;
      flex-direction: column;
      color: #555555 !important;
      align-items: center;
      font-weight: bolder;
    }
    & a:hover {
      color: #a21e1e !important;
    }
  }
  .nav-item_fb.hot::before {
    content: '';
    position: absolute;
    // top: 0px;
    // right: 0px;
    margin-left: 50px;
    width: 21px;
    height: 12px;
    background: no-repeat center;
    background-image: url(../assets/img/daga/hot.gif);
  }
  & .fbLogo {
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    margin: 3px;
  }
  & .youTubeLogo {
    width: 42px;
  }
}
.list-group-item.hot::before {
  content: '';
  position: absolute;
  // top: 0px;
  right: 0px;
  margin-right: 20px;
  width: 21px;
  height: 12px;
  background: no-repeat center;
  background-image: url(../assets/img/daga/hot.gif);
}
// 縮放動畫效果
@keyframes scaleEffect {
  0%,
  100% {
    transform: scale(1); /* 原始大小 */
  }
  50% {
    transform: scale(1.2); /* 放大到1.2倍 */
  }
}
.special-animation {
  animation: scaleEffect 2s infinite; /* 動畫時間2秒，無限循環 */
  transition: transform 0.2s ease-in-out; /* 平滑效果 */
}
// 服務項目 ul
.navbar-expand-lg .navbar-collapse {
  justify-content: center;
}
.nav-item:hover .nav-link {
  color: #8167a9 !important;
}

.nav-item.active .nav-link {
  color: #777 !important;
}
// 項目間距
.nav-item {
  margin: 0 30px; /* 添加左右間距 */
  position: relative;
  transition: all 200ms linear;
}

.nav-item:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  content: '';
  color: #212121;
  background-color: #8167a9;
  opacity: 0;
  transition: all 200ms linear;
}

.nav-item:hover:after {
  bottom: 0;
  opacity: 1;
}

.nav-item.active:hover:after {
  opacity: 0;
}

.nav-item .dropdown-menu {
  display: none;
}

/* 當父元素被懸停時，顯示下拉選單 */
.nav-item:hover .dropdown-menu {
  display: block;
  position: absolute;
  float: none;
  min-width: 10rem;
  margin-top: 0;
}

.dropdown-menu {
  padding: 10px !important;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #212121;
  background-color: #fcfaff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  transition: all 200ms linear;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-item {
  padding: 3px 15px;
  color: #212121;
  border-radius: 2px;
  transition: all 200ms linear;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #fff;
  background-color: rgba(129, 103, 169, 0.6);
}
.nav-link-service {
  color: #fffefe !important;
  padding: 10px 25px !important;
  font-weight: 500;
  transition: all 200ms linear;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
// card-img
.card-img {
  width: 300px;
  height: 200px;
  object-fit: cover; /* 图片覆盖容器 */
}

@media (max-width: 800px) {
  .marquee_style {
    margin-right: 0px;
  }
  .borderStyle {
    display: none;
  }
}
// footer
.bg-footer {
  background-color: rgb(40, 40, 40);
}
.bg-footer2 {
  background-color: rgb(0, 0, 0);
}
.list-unstyled {
  display: flex;
  flex-wrap: wrap; /* 允許換行 */
  gap: 20px; /* Icon 間距 */
  // & li {
  //   margin-right: 20px;
  // }
}
.footer_img1 {
  height: 50px;
  filter: grayscale(100%);
}
.footer_img1:hover {
  filter: none;
  transition:
    filter 0.6s,
    opacity 0.6s,
    transform 0.6s,
    box-shadow 0.3s;
}
.image-container img {
  width: 80px; /* 圖片寬度 */
  height: auto; /* 保持圖片比例 */
  margin: 0 20px;
  // background-color: #fff; /* 圖片背景色，模擬圖片 */
  // padding: 10px; /* 模擬內距效果 */
  border-radius: 5px; /* 圓角效果 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* 陰影效果 */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* 平滑過渡 */
}
.image-container img:hover {
  transform: scale(1.6); /* 加一點放大效果 */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5); /* 增強陰影 */
}
// 右下角功能列表
.fixed-action-bar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 按鈕之間的間距 */
  z-index: 1000;
}
.tg {
  position: relative;
  visibility: visible;
  background-color: transparent;
  width: 90px;
  height: 90px;
  cursor: pointer;
  z-index: 11;
  transition: visibility 0.5s;
  left: 0;
  bottom: 0;
  display: block;
}

.phone-vr-circle-fill {
  width: 65px;
  height: 65px;
  top: 12px;
  left: 12px;
  position: absolute;
  box-shadow: 0 0 0 0 #2c9fd8;
  background-color: rgb(44 159 216 / 74%);
  border-radius: 50%;
  border: 2px solid transparent;
  animation: phone-vr-circle-fill 2.3s infinite ease-in-out; /* 修正動畫名稱 */
  transition: all 0.5s;
  transform-origin: 50% 50%;
}

.phone-vr-img-circle {
  background-color: #2c9fd8 !important;
  width: 40px;
  height: 40px;
  line-height: 40px;
  top: 25px;
  left: 25px;
  z-index: 99; /* 圖標置於最上層 */
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  & .tg_icon {
    animation: shake 0.8s infinite ease-in-out; /* 動畫頻率設為 0.4 秒，反覆進行 */
    // font-size: 20px;
  }
}
// back to top
.back-to-top {
  cursor: pointer;
  color: #134761;
}
.back-to-top:hover {
  transform: scale(1.2); /* 懸停放大效果 */
}
/* 定義動畫 */
@keyframes phone-vr-circle-fill {
  0% {
    box-shadow: 0 0 0 0 rgb(44 159 216 / 74%);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(73, 137, 183, 0.1);
  }
  100% {
    box-shadow: 0 0 0 40px rgba(88, 190, 253, 0);
  }
}
/* 搖晃動畫 */
@keyframes shake {
  0% {
    transform: rotate(0deg); /* 初始位置 */
  }
  20% {
    transform: rotate(-30deg); /* 左晃 */
  }
  40% {
    transform: rotate(30deg); /* 右晃 */
  }
  60% {
    transform: rotate(-30deg); /* 再次左晃 */
  }
  80% {
    transform: rotate(30deg); /* 再次右晃 */
  }
  100% {
    transform: rotate(0deg); /* 回到原位並停留 */
  }
}
/* 手機頁面響應式設置 */
@media screen and (max-width: 768px) {
  // .fbLink {
  //   display: none;
  // }
  .tg_icon {
    font-size: 40px !important;
  }
}
</style>
