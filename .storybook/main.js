const path = require("path");

module.exports = {
  stories: ["../sam-styles/packages/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
  ],
  staticDirs: ["../src/img"],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.module.rules.push(
      {
        test: /\.s(c|a)ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              esModule: false,
            },
          },
          
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  "./sam-styles/packages",
                  "./node_modules/@uswds/uswds/packages",
                  "./node_modules/@uswds"
                ],
                implementation: require("sass-embedded")
              },
            },
          },
        ],
        include: path.resolve(__dirname, "../sam-styles/index.scss"),
      },
    );

    return config;
  },
};