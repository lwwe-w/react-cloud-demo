const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  addPostcssPlugins
} = require("customize-cra");
const path = require("path");
let webpack = require("webpack");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    pages: path.resolve(__dirname, "src/pages")
  }),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  }),
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addPostcssPlugins([
    require("postcss-px-to-viewport")({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    })
  ])
);
