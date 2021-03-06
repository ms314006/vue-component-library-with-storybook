import Vue from "vue";
import App from "./App.vue";
import setUpPlugins from "@/plugins";

setUpPlugins(Vue);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
