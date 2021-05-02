import Vue from 'vue';
import VueCookie from 'vue-cookie';
import App from './App.vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ScrollAnimation from './directives/scrollanimation';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookie);
Vue.directive('scrollanimation', ScrollAnimation);

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')