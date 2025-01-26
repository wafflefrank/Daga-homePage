<template>
  <div class="container_2">
    <div class="video-wrapper">
      <video class="video-bg" preload="" playsinline="" autoplay="" muted="" loop="">
        <source src="https://dlae888.com/wp-content/uploads/2024/03/tvc2.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="card my-4">
      <h2 class="card-title">GIỚI THIỆU DAGA</h2>

      <div class="card-content">
        <p>
          Hình thành và phát triển trong những năm đầu của cuộc cách mạng công nghệ và thông tin.
          Chúng tôi tự hào là nhà cung cấp dịch vụ giải trí hàng đầu Châu Á.
        </p>
        <p>
          DAGA đã được GEO TRUST – nhà cung cấp chứng chỉ số Thế giới công nhận và cấp chứng chỉ
          website an toàn nhất, toàn bộ thông tin của các thành viên đều được mã hóa để đảm bảo sự
          riêng tư tuyệt đối cho người chơi.
        </p>
        <p>
          Trong những năm qua, chúng tôi tiếp cận và phục vụ hơn 8 triệu lượt khách hàng. Với tiêu
          chí “Chơi để giải trí và không nên coi đây là cách để kiếm tiền”. Định hướng cho khách
          hàng có những trải nghiệm tốt nhất khi đến với DAGA.
        </p>
        <p>
          Vũ trụ giải trí đa nền tảng với hàng ngàn trò chơi, sảnh cá cược online. Trực tiếp bóng đá
          miễn phí không cần mua bản quyền thỏa mãn đam mê của khách hàng.
        </p>
        <p>Đội ngũ phục vụ và CSKH 24/7 tận lực – tận tâm và tận tình.”</p>
        <p>
          Chúng tôi luôn cam kết đến với công ty giải trí và truyền thông DAGA, mọi người chơi đều
          có trải nghiệm thú vị và tốt nhất.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// 主體內容樣式
.container_2 {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中對齊 */
  align-items: center;
  padding: 0 20px; /* 左右內邊距，防止影片貼邊 */
}
.video-wrapper {
  width: 80%; /* 控制影片的總寬度（80%） */
  max-width: 1200px; /* 設定影片最大寬度 */
  overflow: hidden; /* 防止內容溢出 */
}

.video-bg {
  width: 100%; /* 確保影片充滿父容器 */
  height: auto; /* 按比例調整高度 */
  border-radius: 10px; /* 可選：添加圓角 */
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
  padding: 20px;
  & p {
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
</style>
