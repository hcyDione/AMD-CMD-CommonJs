define(function (require, exports, module){
	var init = function () {
		var str = [
		'yolo dione pangpang',
		'yolo dione pangpang1',
		'yolo dione pangpang2',
		'yolo dione pangpang3',
		'yolo dione pangpang4',
		];
		var index = Math.floor(Math.random()*str.length);
		return str[index]
	}
	module.exports = {
		init: init
	}
})