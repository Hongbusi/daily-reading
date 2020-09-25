<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner__des">Welcome to Hongbusi website.</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="less" scoped>
  .home-banner {
    width: 100%;
    height: 100vh;
    position: relative;
    text-align: center;
    border-color: #666;
    background-image: url("../assets/image/banner.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;

    &__des {
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      font-size: 50px;
      color: #fff;
    }
  }
</style>
