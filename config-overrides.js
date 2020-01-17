const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addPostcssPlugins
} = require("customize-cra")
const path = require("path")

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "pages": path.resolve(__dirname, "src/pages")
  }),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  }),
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
)
