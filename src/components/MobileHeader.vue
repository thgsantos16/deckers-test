<template>
  <header class="container-fluid mobile-header">
    <div class="row">
      <div class="col hamburger"></div>
      <div class="col search"></div>
      <div class="col logo"></div>
      <div class="col profile"></div>
      <div class="col cart"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MobileHeader extends Vue {
  showMenu = false;
}
</script>

<style scoped lang="scss">
.mobile-header {
  background-color: #111;
  min-height: 52px;
  position: fixed;
  z-index: 1001;

  .col {
    min-height: 50px;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .hamburger {
    background-image: url(../assets/hamburger.png);
  }

  .search {
    background-image: url(../assets/search-white.png);
  }

  .logo {
    background-image: url(../assets/UGG-white.png);
  }

  .profile {
    background-image: url(../assets/profile.png);
  }

  .cart {
    background-image: url(../assets/cart-white.png);
  }
}
</style>
