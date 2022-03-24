const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      oneOf: [
        {
          resourceQuery: /module/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            },
            "sass-loader"
          ]
        },
        {
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ],
    });
    return config;
  },
}