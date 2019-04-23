define (['One', 'Two'], function (one, two) {
	return function () {
		console.log(one.name + " " + two.sex + '  is in here')
	}
})