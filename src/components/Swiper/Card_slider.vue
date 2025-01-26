<template>
  <!--  navigation 新增分頁箭頭 -->
  <swiper
    :slides-per-view="4"
    :space-between="25"
    :loop="true"
    :breakpoints="breakpoints"
    :navigation="true"
  >
    <swiper-slide v-for="(card, index) in cards" :key="index">
      <div class="card-container mb-5" :style="{ background: card.background }">
        <div class="card-icon">
          <img :src="card.image" :alt="card.title" />
        </div>
        <div class="card-content">
          <h5 class="card-title mt-3">{{ card.title }}</h5>
          <p class="card-text mt-3">{{ card.text }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// :autoplay="{ delay: 3000, disableOnInteraction: false }" //自動輪播代碼
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
  data() {
    return {
      cards: [
        {
          image: new URL('../../assets/img/Swiper/card1.png', import.meta.url).href,
          title: 'SỰ NGHIỆP',
          text: 'Nhà cái chúng tôi sẽ cung cấp cho bạn một sự nghiệp thu nhập trọn đời.',
          background: '#fdf8e3'
        },
        {
          image: new URL('../../assets/img/Swiper/card2.png', import.meta.url).href,
          title: 'PHÁT TRIỂN',
          text: 'Doanh nghiệp lớn nhất Châu Á thương hiệu đáng tin cậy nhất cho người dùng.',
          background: '#FDEFF0'
        },
        {
          image: new URL('../../assets/img/Swiper/card3.png', import.meta.url).href,
          title: 'CAM KẾT',
          text: 'Không rủi ro, không tư bản, đại lý có thể kiếm được hoa hồng mà không phải trả bất kỳ khoản phí nào trả trước.',
          background: '#DEEDC6'
        },
        {
          image: new URL('../../assets/img/Swiper/card4.png', import.meta.url).href,
          title: 'ĐÀO TẠO',
          text: 'Cung cấp nguồn tìm kiếm khách hàng trên mạng xã hội, cùng giúp bạn theo xu hướng của khách hàng.',
          background: '#f0f3fa'
        },
        {
          image: new URL('../../assets/img/Swiper/card5.png', import.meta.url).href,
          title: 'MINH BẠCH',
          text: 'Báo cáo số liệu đại lý rõ ràng vào ngày 5 – 6 tháng kế tiếp, giúp bạn phân tích dữ liệu khách hàng.',
          background: '#eaf8ff'
        },
        {
          image: new URL('../../assets/img/Swiper/card6.png', import.meta.url).href,
          title: 'NỖ LỰC',
          text: 'Chuyên thuộc quản lý đại lý, vì bạn dốc sức đẩy mạnh chiến lược phát triển chuyên thuộc của bản thân.',
          background: '#FDEFF0'
        },
        {
          image: new URL('../../assets/img/Swiper/card7.png', import.meta.url).href,
          title: 'TRUYỀN THÔNG',
          text: 'Miễn phí thiết kế hình ảnh, nội dung quảng cáo và xây dựng thương hiệu cá nhân trên đa nền tảng khác nhau.',
          background: '#DEEDC6'
        },
        {
          image: new URL('../../assets/img/Swiper/card8.png', import.meta.url).href,
          title: 'TÀI NGUYÊN',
          text: 'Miễn phí cung cấp tên miền trọn đời cho đại lý đạt doanh thu trong tháng 200 triệu trở lên. Cung cấp tài khoản Demo, tài khoản Facebook và Telegram.',
          background: '#f0f3fa'
        }
      ],
      breakpoints: {
        // 當螢幕寬度 >= 1200px，顯示4張卡片
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // 當螢幕寬度 >= 768px，顯示2張卡片
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // 當螢幕寬度 < 768px，顯示1張卡片
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      // console.log('slide change')
    },
    getCardClass(index) {
      // 返回類名，根據索引
      return `card-bg-${(index % 4) + 1}`
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
.card-container {
  height: 350px; /* 固定高度 */
  background: #fff; /* 卡片背景 */
  border-radius: 25px; /* 圓角效果 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 陰影效果 */
  padding: 20px 20px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  //   justify-content: space-between;
  //   transition:
  //     transform 0.3s,
  //     box-shadow 0.3s; /* 加入 hover 動畫效果 */
}

.card-container:hover {
  background: linear-gradient(138.62deg, #bc0d2c 7.45%, #e65f1e 85.72%) !important;
  & .card-title {
    color: #fff;
  }
  & .card-text {
    color: #fff;
  }
  & img {
    transform: scale(1.07); /* 放大效果 */
    // box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* 增加陰影 */
  }
}

.card-icon img {
  width: 140px;
  height: 140px;
  margin-bottom: 15px;
  transition:
    transform 0.3s,
    box-shadow 0.3s; /* 加入 hover 動畫效果 */
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c; /* 標題顏色 */
  margin-bottom: 10px;
}

.card-text {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

/* 卡片背景顏色設置（根據圖片示例） */
// .card-container:nth-child(1) {
//   background: #fdf8e3 !important; /* 淡粉色 */
// }
/* 不同背景色 */
.card-bg-1 {
  background: #fdf8e3 !important; /* 淡粉色 */
}

.card-bg-2 {
  background: #e8f7e0; /* 淡綠色 */
}

.card-bg-3 {
  background: #e5f1ff; /* 淡藍色 */
}

.card-bg-4 {
  background: #fff5e5; /* 淡橙色 */
}
/* 響應式調整 */
@media (max-width: 768px) {
  .card-container {
    padding: 15px;
  }
  .card-title {
    font-size: 1rem;
  }
  .card-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .card-container {
    padding: 10px;
  }
  .card-title {
    font-size: 0.9rem;
  }
  .card-text {
    font-size: 0.7rem;
  }
}
</style>
