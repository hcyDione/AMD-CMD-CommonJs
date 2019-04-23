# AMD-CMD-CommonJs
通过例子来讲述AMD, CMD, CommonJs, ES6四种模块引入机制的分析和用法和利弊
```

路径：
./ : 表示当前路径
../ : 表示上级目录
seajs.config 里面的 alias 是别名设置只给路径取个别名
seajs 里面有两个用到路径的地方 1个是seajs.user() ; 1个是require() 
base 路径是seajs 文件所在目录 本例子为：file:///D:/dione/AMD-CMD-CommonJs/sea.js
seajs.use()调用模块文件的路径默认是seajs文件的父文件夹目录
本例子为：file:///D:/dione/AMD-CMD-CommonJs 相对于base的路径
调用的
require()调用路径则是相对于当前的js文件所在的目录
requireJS三个主要函数： define (创建模块)
                       require (加载模块)
                       config （配置）
CommonJS 只运行于node端 是node端的模块化加载规范
ES6 模块加载方式是静态加载的，因此import和export不能出现在判断
等动态语句中
import获取的是模块接口的引用，模块内部发生改变时， import出的接口也会对应改变
CommonJS获得的是接口运行结果的缓存
ES6 用于node环境下的前端服务中 如Vue

```