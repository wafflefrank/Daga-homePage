<template>
  <div class="container_2">
    <div class="card">
      <h2 class="card-title">LIÊN HỆ HỢP TÁC</h2>

      <div class="card-content">
        <p>
          Không cần điều kiện, chỉ cần bạn muốn trở thành đại lý VIP của chúng tôi, chỉ cần bạn có
          liên hệ hoặc quảng bá chu đáo, không cần thao tác gì cả, cũng không mất quá nhiều thời
          gian. Đừng lo lắng về việc offline lỗ, bạn có thể chờ đợi cho lợi nhuận. Việc bạn phải làm
          là liên hệ với tài khoản Telegram hoặc Gmail để đăng ký
        </p>
        <div class="d-flex flex-column align-items-center">
          <img class="tg_img mb-4" src="../assets/img/daga/tg.png" alt="#" />
          <a
            target="_blank"
            href="https://direct.lc.chat/15293010/"
            class="navSec-button1 special-animation"
            >THAM GIA NGAY</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 主體內容樣式
.nhapnhay {
  font-weight: 700;
  animation: my 0.7s infinite;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
.nhapnhay::before {
  content: url('../assets/img/arrowLeft.png');
  margin-right: 25px;
}
.nhapnhay::after {
  content: url('../assets/img/arrowRight.png');
  margin-left: 25px;
}
.container_2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  //   min-height: 100vh;
}
.card {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 12px 0px rgba(183, 109, 109, 0.69);
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
}

.card-title {
  // background-color: #b00000;
  color: #555;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  text-rendering: optimizeSpeed;
  width: 100%;
  padding: 15px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.card-content {
  padding: 0 20px 20px;
  & p {
    padding: 0;
    text-align: left;
  }
}

.card-section {
  margin-bottom: 20px;
}

.card-section h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #555;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
}

.card-section ul {
  list-style: disc inside;
  padding-left: 20px;
}

.card-section ul li {
  margin-bottom: 10px;
  text-align: left;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  padding: 10px;
  // width: 50%;
  text-align: center;
  border: 1px solid #ececec;
  color: #666;
  font-weight: bolder;
}

table th {
  background-color: #8f0000;
  color: #fff;
}
.gradient_Card {
  background: linear-gradient(92.53deg, #b7042c 29.73%, #e8641b 97.09%);
  width: 100%;
  display: block;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
}
.table-fixed {
  width: 100%; /* 表格寬度佔滿父容器 */
  //   border-collapse: collapse; /* 移除單元格之間的空隙 */
  table-layout: fixed; /* 固定表格佈局 */
}
.table-fixed th,
.table-fixed td {
  text-align: center; /* 水平置中 */
  vertical-align: middle; /* 垂直置中 */
  border: 1px solid #ececec; /* 單元格邊框 */
  font-weight: bolder;
  padding: 10px; /* 單元格內邊距 */
  width: 25%; /* 每個欄位佔比均等 */
}

.table-fixed th {
  background-color: #8f0000; /* 背景色 */
  color: white; /* 字體顏色 */
}
// footer_title
.footer_title {
  border: 1px solid #ff5722;
  background: linear-gradient(92.53deg, #b7042c 29.73%, #e8641b 97.09%);
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  color: #fff;
  padding: 15px;
}
.tg_img {
  width: 80px;
}
.navSec-button1 {
  border: 0px solid #ff5722;
  padding: 12px 20px;
  font-weight: bold;
  background: linear-gradient(92.53deg, #b7042c 29.73%, #e8641b 97.09%);
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  text-decoration: none;
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
.special-animation {
  animation: scaleEffect 2s infinite; /* 動畫時間2秒，無限循環 */
  transition: transform 0.2s ease-in-out; /* 平滑效果 */
}

@media (max-width: 768px) {
  .card {
    margin: 10px;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-section h3 {
    font-size: 1rem;
  }
}

// 動畫
@keyframes my {
  0% {
    color: #555555;
  }
  50% {
    color: #cd0714;
  }
  100% {
    color: #ba904a;
  }
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
</style>
