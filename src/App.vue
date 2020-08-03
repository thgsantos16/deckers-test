<template>
  <div id="app">
    <vue-headful
        title="Deckers Test"
    />
    <transition name="fade" appear mode="out-in">
      <custom-header :motto="motto" v-if="desktop" />
      <mobile-header v-else />
    </transition>

    <transition name="fade" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import CustomHeader from '@/components/CustomHeader.vue';
import MobileHeader from '@/components/MobileHeader.vue';

export default {
  components: {
    CustomHeader,
    MobileHeader,
  },
  name: 'App',
  data() {
    return {
      motto: 'Free Shipping. Free Returns',
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', () => { this.windowWidth = window.innerWidth; });
  },
  computed: {
    desktop() {
      return this.windowWidth > 992;
    },
  },
};
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&family=Prompt:ital@0;1&display=swap');

#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// Fade transition
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
