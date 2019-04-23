// 配置模块的别名
requirejs.config({
    paths: {
        One: './define1',
        Two: './define2',
        Three: './define3',
    }
});

// 回调只有在所有模块都加载完成之后才会执行
require(['Three'],function (Three){
  Three()
})