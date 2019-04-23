// 通过define()定义函数，第一个参数是数组，里面定义一些需要依赖的包，
// 第二个参数是回调函数，通过变量来引用模块里面的方法，通过return输出
// 是一个依赖前置，异步定义的框架
define (function () {
	var one = {
		name: 'Dione',
		setname: function (name) {
			this.name = name
			console.log(this.name)
		}
	}
	return one
})