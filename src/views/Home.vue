<template>
  <div class="home container-fluid">
    <img alt="Star Wars - UGG logo" src="../assets/logo.png" class="logo">

    <div class="hyperspeed-mobile">
      <div class="product">
        <img alt="Star Wars - UGG product" src="../assets/product.png" class="product-image">
      </div>
    </div>

    <div class="opening-text container">
      Just in time for the launch of Star Wars: The Last Jedi,
      our Droid Collection brings the kid-favorite characters BB-8 and R2-D2 to life in soft,
      lightweight boots. Now your little one can channel the Force at school, on the playground,
      or any adventure in a galaxy far, far away…
    </div>

    <div class="hyperspeed">
      <div class="product">
        <img alt="Star Wars - UGG product" src="../assets/product.png" class="product-image">
      </div>
    </div>

    <div class="container-lg slots">
      <div class="row justify-content-center">
        <div class="slot col-lg-12 centered"
             v-scroll-reveal>
             <div class="content">
               <div class="slot-image"></div>
               <h2 class="slot-title">UGG REWARDS PERK.</h2>
               <div class="slot-text">
                 AS AN UGG REWARDS MEMBER, YOU GET EXCLUSIVE
                 ACCESS TO THESE UGG x STAR WARS BOOTS.
                </div>
             </div>
        </div>
        <div class="slot"
             v-scroll-reveal
             v-for="slot in slots"
             :key="slot.id"
             :class="[{ 'col-lg-12': slot.size === 'big' }, { 'col-lg-6': slot.size !== 'big' }]">
             <div class="content" :style="{ backgroundImage: bg(slot.img) }">
              <div class="slot-name">{{ slot.name }}</div>
             </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      slots: [
        {
          id: 1,
          name: 'KIDS CLASSIC II BB-8',
          img: 'products/1.png',
        },
        {
          id: 2,
          name: 'TODDLERS CLASSIC II BB-8',
          img: 'products/2.png',
        },
        {
          id: 3,
          name: 'KIDS CLASSIC II RD-D2',
          img: 'products/3.png',
        },
        {
          id: 4,
          name: 'TODDLERS CLASSIC II RD-D2',
          img: 'products/4.png',
        },
        {
          id: 5,
          size: 'big',
          name: 'BABY CLASSIC II RD-D2',
          img: 'products/5.png',
        },
      ],
    };
  },
  methods: {
    bg(img) {
      return `url("img/${img}")`;
    },
  },
};
</script>

<style lang="scss" scoped>

@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins";

.logo {
  margin: 12vh 0 7vh;
  max-width: 80%;

  @include media-breakpoint-down('md') {
    margin: 20vh 0 7vh;
  }
}

.opening-text {
  text-align: justify;
  text-align-last: justify;
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 2.4rem;
  margin-bottom: 10vh;

  @include media-breakpoint-down('md') {
  text-align-last: center;
  }
}

.hyperspeed {
  height: 100vh;
  margin: 0 -15px 7vh;
  overflow: hidden;
  background-color: #000;
  position: absolute;
  width: 100%;
  display: table;

  @include media-breakpoint-down('md') {
    display: none;
  }

  &:before {
    content: "";
    width: 100%;
    height: 160%;
    background-image: url(../assets/hyperspeed.png);
    background-position: center center;
    display: block;
    background-size: cover;
    margin-top: -20%;
    position: absolute;
  }

  &:hover {
    &:before {
      animation: hyperspeed 2s infinite linear;
    }
  }

  .product {
    display: table-cell;
    vertical-align: middle;
    position: relative;

    .product-image {
      width: 80vh;
      max-width: 80%;
    }
  }
}

.hyperspeed-mobile {
  height: 70vh;
  margin: 3vh -15px 7vh;
  overflow: hidden;
  background-color: #000;
  width: calc(100% + 30px);
  display: none;
  position: relative;

  @include media-breakpoint-down('md') {
    display: table;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(/img/hyperspeed.7649bac1.png);
    background-position: center center;
    display: block;
    background-size: cover;
    position: absolute;
  }

  .product {
    display: table-cell;
    vertical-align: middle;
    position: relative;

    .product-image {
      width: 80vh;
      max-width: 80%;
    }
  }
}

.slots {
  margin-top: 124vh;
  min-width: 80%;
  margin-bottom: 20vh;

  @include media-breakpoint-down('md') {
    padding: 0;
  }

  @include media-breakpoint-down('md') {
    margin-top: 3vh;
  }

  .slot {
    height: 25vw;
    min-height: 30vh;
    margin: 8px 0;
    overflow: hidden;
    padding: 0 8px;

    @include media-breakpoint-down('md') {
      padding: 0;
      min-height: 43vh;
    }

    &.col-md-12 {
      .content {
        background-size: 70%;

        @include media-breakpoint-down('md') {
          background-size: 90%;
        }
      }
    }

    .content {
      background-color: #F9F9F9;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 50%;

      @include media-breakpoint-down('md') {
        background-size: 70%;
      }

      .slot-name {
        transition: all 0.43s;
        position: absolute;
        width: calc(100% - 16px);
        left: 8px;
        top: 100%;
        padding: 7px;
        background: #E0E0E0;
        text-transform: uppercase;
        font-size: 18px;
      }

      &:hover {
        .slot-name {
          margin-top: -40px;
        }
      }

      .slot-image {
        width: 247px;
        height: 117px;
        background-image: url('../assets/rewards logo.png');
        display: block;
        margin: 12px auto 25px;
      }

      .slot-title {
        font-family: 'Libre Caslon Text', sans-serif;
        color: #000;
        font-size: 2.4rem;
      }

      .slot-text {
        margin: 16px auto;
        width: 34%;
        min-width: 340px;
        font-size: 1.2rem;
      }
    }

    &.centered {
      display: table;

      .content {
        display: table-cell;
        vertical-align: middle;

        @include media-breakpoint-down('md') {
          padding: 34px 0;
        }
      }
    }
  }
}

@keyframes hyperspeed {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
  80% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
