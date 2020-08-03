import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueScrollReveal from 'vue-scroll-reveal';
import vueHeadful from 'vue-headful';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.component('vue-headful', vueHeadful);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  delay: 200,
  scale: 0.7,
  distance: '16px',
  mobile: false,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
