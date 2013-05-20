Date.prototype.format = function(pattern) {
	var year = this.getFullYear();
	pattern = pattern.replace(/yyyy/, year);
	var month = this.getMonth();
	month = month + 1;
	if(month.toString().length == 1) {
		month = '0' + month;
	}
	pattern = pattern.replace(/MM/, month);

	var dayOfMonth = this.getDate();
	if(dayOfMonth.toString().length == 1) {
		dayOfMonth = "0" + dayOfMonth;
	}
	pattern = pattern.replace(/dd/, dayOfMonth);

	var hours = this.getHours();
	if(hours.toString().length == 1) {
		hours = "0" + hours;
	}
	pattern = pattern.replace(/hh/, hours);

	var minutes = this.getMinutes();
	if(minutes.toString().length == 1) {
		minutes = "0" + minutes;
	}
	pattern = pattern.replace(/mm/, minutes);

	var seconds = this.getSeconds();
	if(seconds.toString().length == 1) {
		seconds = "0" + seconds;
	}
	pattern = pattern.replace(/ss/, seconds);
	return pattern;
}
Date.prototype.addDays = function(days) {
	var day = this.getDate();
	this.setDate(parseInt(day) + parseInt(days));
	return this;
};
Date.prototype.minusDays = function(days) {
	var day = this.getDate();
	this.setDate(parseInt(day) - parseInt(days));
	return this;
};
Date.prototype.addMonths = function(months) {
	var month = this.getMonth();
	this.setMonth(parseInt(month) + parseInt(months));
	return this;
};
Date.prototype.minusMonths = function(months) {
	var month = this.getMonth();
	this.setMonth(parseInt(month) - parseInt(months));
	return this;
};
Date.prototype.addYears = function(years) {
	var year = this.getFullYear();
	this.setFullYear(parseInt(year) + parseInt(years));
	return this;
};
Date.prototype.minusYears = function(years) {
	var year = this.getFullYear();
	this.setFullYear(parseInt(year) - parseInt(years));
	return this;
};
Date.prototype.addMinutes = function(minutes) {
	var minute = this.getMinutes();
	this.setMinutes(parseInt(minute) + parseInt(minutes));
	return this;
};
Date.prototype.minusMinutes = function(minutes) {
	var minute = this.getMinutes();
	this.setMinutes(parseInt(minute) - parseInt(minutes));
	return this;
};
Date.prototype.addSeconds = function(seconds){
	var second = this.getSeconds();
	this.setSeconds(parseInt(second)+parseInt(seconds));
	return this;
};
Date.prototype.minusSeconds = function(seconds){
	var second = this.getSeconds();
	this.setSeconds(parseInt(second)-parseInt(seconds));
	return this;
};
String.prototype.toDate = function(){
	var year = this.substring(0,4);
	var month = this.substring(4,6);
	var day = this.substring(6,8);
	var hour = this.substring(8,10);
	var minute = this.substring(10,12);
	var second = this.substring(12,14);
	var date = new Date(year+'-'+month+'-'+day);
	date.setHours(hour);
	date.setMinutes(minute);
	date.setSeconds(second);
	return date;
}
