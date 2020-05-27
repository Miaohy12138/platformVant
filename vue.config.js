module.exports = {
  devServer: {
         disableHostCheck: true
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          'text-color': '#111',
          'border-color': '#87CEEB',
          'van-button--danger-color':'#87CEEB'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        },
      },
    },
  },
};
