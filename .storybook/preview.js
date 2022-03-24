import Vue from "vue";
import { Card } from "element-ui";

const components = [Card];

const element = {
  install: function (Vue) {
    components.forEach((component) => {
      Vue.use(component);
    });
  },
};

Vue.use(element);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}