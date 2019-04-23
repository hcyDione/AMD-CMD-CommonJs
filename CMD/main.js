// 通过define（）定义，没有前置依赖，通过require加载插件，
// CMD就近依赖， 在什么地方使用到就在什么地方require该插件, 同步的概念
define(function (require, exports, module) {
	//var text = require('./define1.js');
    // 如果设置了别名
    // var text = require('define1');
    var text = require('define2');

    // var $ = require('jquery');
    // $('#cmd').text(text.init())

	// var div = document.getElementById('cmd');
	// cmd.innerHTML = text.init()
	
	var showAll = function () {
		document.getElementById('cmd').innerHTML = text.init()
	}
	exports.showAll = showAll
})