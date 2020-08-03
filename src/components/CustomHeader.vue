<template>
  <header class="container-fluid">
    <div class="pre-header row">
      <div class="col-md text-left">
        {{ motto }}
      </div>
      <div class="col-md text-right">
        <a>Login</a>
        <a>Join</a>
        <a>Ugg Rewards</a>
        <i class="flag" />
      </div>
    </div>

    <div class="header container">
      <nav class="nav justify-content-between w-100">
        <a class="nav-link logo" href="#">
          <img src="../assets/UGG.png">
        </a>
        <a class="nav-link" href="#">Women</a>
        <a class="nav-link" href="#">Men</a>
        <a class="nav-link" href="#">Kids</a>
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Sale</a>
        <a class="nav-link" href="#">Explore</a>
        <a class="nav-link" href="#">Stores</a>
        <a class="nav-link search" href="#">
          <img src="../assets/search.png">
        </a>
        <a class="nav-link cart" href="#">
          <img src="../assets/cart.png">
          <span class="cart-items">2</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CustomHeader extends Vue {
  @Prop() private motto!: string;
}
</script>

<style scoped lang="scss">
.pre-header {
  padding: 12px 7px 25px;

  .text-right {
    a {
      margin-right: 20px;
      cursor: pointer;
    }

    .flag {
      cursor: pointer;
      display: inline-block;
      width: 19px;
      height: 15px;
      background-image: url('../assets/usa.png');
      vertical-align: top;
      margin-top: 5px;
    }
  }
}

.header {
  .nav-link {
    text-transform: uppercase;
    color: #222222;

    &.logo {
      vertical-align: top;
      margin-top: 3px;
    }

    .cart-items {
        width: 22px;
        height: 22px;
        background-color: #00b9ca;
        color: #FFF;
        display: inline-block;
        font-size: 0.8rem;
        border-radius: 50%;
        margin-left: 5px;
        padding-top: 2px;
        vertical-align: top;
        margin-top: 2px;
    }
  }
}
</style>
