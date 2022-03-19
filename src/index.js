import Header from "@/components/Header.vue";
import Passage from "@/components/Passage.vue";

const Components = [Header, Passage];

const install = function (Vue) {
  Components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install,
};
