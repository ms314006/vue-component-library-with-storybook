import Passage from "@/components/Passage.vue";
import setUpPlugins from "@/plugins";

const Components = [Passage];

const install = function (Vue) {
  setUpPlugins(Vue);

  Components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install,
};
