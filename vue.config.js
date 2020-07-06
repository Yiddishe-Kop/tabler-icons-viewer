module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },

  pwa: {
    name: 'Tabler Icons Viewer',
    themeColor: '#1a202c',
    iconPaths: {
      appleTouchIcon: 'img/icons/android-chrome-maskable-512x512.png',
    }
  }
};
