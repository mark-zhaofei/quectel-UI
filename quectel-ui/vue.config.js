// vue-config.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// "dist:locale": "webpack --config build/webpack.dist.locale.config.js",
// "dist": "npm run lib && npm run dist:locale",
// "prepare": "npm run dist"

module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',   // 把src 修改为examples
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  /* chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。 */
  chainWebpack: config => {
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
        .add(__dirname + 'packages')  // 注意这里需要绝对路径，所有要拼接__dirname
        .add(__dirname + 'examples')  // 注意这里需要绝对路径，所有要拼接__dirname
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
}
