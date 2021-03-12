module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/style/main.scss";',
        implementation: require('node-sass')
      },
    },
  },
};