// vue-config.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 代码压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin') // zip
const productionGzipExtensions = ['.js', '.vue', '.json', '.scss', '.less']
// "dist:locale": "webpack --config build/webpack.dist.locale.config.js",
// "dist": "npm run lib && npm run dist:locale",

module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      'babel-polyfill': 'babel-polyfill',
      // page 的入口
      entry: ['examples/main.js'], // 把src 修改为examples
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  /* chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。 */
  chainWebpack: config => {
    // config.plugin('html')
    // .tap(args => {
    //     args[0].cdn = isProduction ? proCdn : serveCdn;
    //     return args;
    // });
    config.resolve.alias
      .set('@$', resolve('examples'))
      .set('assets', resolve('examples/assets'))
      .set('components', resolve('examples/components'))
      .set('store', resolve('examples/store'))
      .set('views', resolve('examples/views'))
      .set('utils', resolve('examples/utils'))
      .set('api', resolve('examples/api'))
      .set('mixins', resolve('examples/mixins'))
      .set('directive', resolve('examples/directive'))
      .set('router', resolve('examples/router'))
    config.module
      .rule('js')
      .include
      .add(__dirname + 'packages') // 注意这里需要绝对路径，所有要拼接__dirname
      .add(__dirname + 'examples') // 注意这里需要绝对路径，所有要拼接__dirname
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "examples/assets/styles/common.scss";`
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: config => {
    // config.plugins.push(new BundleAnalyzerPlugin())
    config.plugins.push(new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 8192,
      minRatio: 0.8
    }))
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
    // config.externals = {
    //   'vue': 'Vue',
    //   'vuex': 'Vuex',
    //   'element-ui': 'ELEMENT',
    //   'echarts': 'echarts'
    // }
  }
}
