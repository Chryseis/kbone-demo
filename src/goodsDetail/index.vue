<template>
  <div class="goods-detail-wrapper">
    <div class="goods-banner">
      <img src="https://static-image.91jkys.com/giftfiles/dbab0e56-e412-4925-9a40-fe66e0f1fb63.jpg" alt="" />
    </div>
    <div class="goods-name">日本小林冰宝贴退热贴12片 幼儿</div>
    <div class="tags"></div>
    <div class="goods-price"></div>
    <div class="extra-info"></div>
    <div class="solid-bar"></div>
  </div>
</template>

<script>
export default {
  name: 'index'
};
</script>

<style>
.goods-detail-wrapper {
  background-color: #fff;

  .goods-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 320px;

    img {
      width: 240px;
    }
  }
  .goods-name {
    padding: 0 15px;
    font-size: 18px;
  }
}
</style>
