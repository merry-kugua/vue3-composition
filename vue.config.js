const path = require("path");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = {
  // webpack.config.js
  configureWebpack: {
    resolve: {
      alias: {
        // 配置alias 别名 使用@表示当前项目src下的文件
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      require("unplugin-auto-import/webpack")({
        resolvers: [ElementPlusResolver({ importStyle: false })],
      }),
      require("unplugin-vue-components/webpack")({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
};
