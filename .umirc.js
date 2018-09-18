const SPARROW_ENVIRONMENT = process.env.SPARROW_ENVIRONMENT;

console.log('----> process.env.SPARROW_ENVIRONMENT: ', SPARROW_ENVIRONMENT, '\r\n');


// ref: https://umijs.org/config/
export default {
  /**
   * 基本配置
   */

  // 指定插件
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: { immer: true },
        dynamicImport: true,
        title: 'mobile-shop',
        dll: true,
        pwa: false,
        routes: {
          exclude: [
            /utils/,
            /util/,
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
        hardSource: true,
      }
    ],
  ],

  /**
   * 构建流程
   */


  /**
   * webpack
   */

  // 配置主题，实际上是配 less 变量。支持对象和字符串两种类型，字符串需要指向一个返回配置的文件。 
  theme: "./themes/theme-config.js",

  // 通过 webpack 的 DefinePlugin 传递给代码，值会自动做 JSON.stringify 处理。
  define: {
    // "process.env.TEST": 1,
    // "USE_COMMA": 2,
    'process.env.SPARROW_ENVIRONMENT': SPARROW_ENVIRONMENT,
  },

  // 配置 react 和 react-dom 不打入代码
  // externals: {
  //   "react": "window.React",
  //   "react-dom": "window.ReactDOM"
  // },

  // "proxy": {
  //   "/api": {
  //     "target": "http://jsonplaceholder.typicode.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api": "" }
  //   }
  // },

}
