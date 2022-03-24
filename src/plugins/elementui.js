import { Card } from "element-ui";

const components = [Card];

const element = {
  install: function (Vue) {
    components.forEach((component) => {
      Vue.use(component);
    });
  },
};

export default element;
