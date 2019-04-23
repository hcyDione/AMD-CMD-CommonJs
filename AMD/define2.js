define (function () {
	var two = {
		sex: 'female',
		setname: function (sex) {
			this.sex = sex
			console.log(this.sex)
		}
	}
	return two
})