/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
  origin: 'https://static.chryseis.cn',
  entry: '/goods',
  router: {
    other: ['/list/:id'],
    home: ['/home'],
    goodsDetail: ['/goodsDetail'],
    goods: ['/goods']
  },
  redirect: {
    notFound: 'home',
    accessDenied: 'home'
  },
  generate: {
    autoBuildNpm: 'npm'
  },
  app: {
    backgroundTextStyle: 'dark',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: 'kbone'
  },
  appExtraConfig: {
    sitemapLocation: 'sitemap.json'
  },
  global: {
    rem: true,
    share: true,
    windowScroll: false,
    backgroundColor: '#F7F7F7'
  },
  pages: {
    goods: {
      extra: {
        navigationStyle: 'custom'
      }
    }
  },
  optimization: {
    domSubTreeLevel: 10,

    elementMultiplexing: true,
    textMultiplexing: true,
    commentMultiplexing: true,
    domExtendMultiplexing: true,

    styleValueReduce: 5000,
    attrValueReduce: 5000
  },
  projectConfig: {
    projectname: 'kbone-demo',
    appid: 'wx62513a225568879a'
  }
};
