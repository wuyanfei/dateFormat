dateFormat
==========

格式化日期 日期的加减

Examples:

var dateFormat = require('./dateFormat');

console.log(new Date().format('yyyy-MM-dd'));//2012-12-04

console.log(new Date().format('yyyyMMdd'));//20121204

console.log(new Date().format('yyyy-MM-dd hh:MM:ss'));//2012-12-04 11:27:38

console.log(new Date().format('yyyyMMdd hh:MM:ss'));//20121204 11:27:38

console.log(new Date().format('yyyy/MM/dd'));//2012/12/04

console.log(new Date().format('yyyy/MM/dd hh:MM:ss'));//2012/12/04 11:27:38

console.log(new Date().format('yyyyMMdd hh:MM:ss ll'));//20121204 11:27:38 868

console.log(new Date().format('yyyyMMdd kk:MM:ss'));//20121204 11:27:38

console.log(new Date().format('yyyyMMdd hhMMss'));//20121204 112738

console.log(new Date().format('yyyy/MM/dd hhMMss'));//2012/12/04 112738

console.log(new Date().format('MMss'));//1238

console.log(new Date().format('hh'));//11 24进制

console.log(new Date().format('kk'));//11  12进制

console.log(new Date().addYears(1).format('yyyyMMdd'));//20131204

console.log(new Date().minusYears(1).format('yyyyMMdd'));//20111204

console.log(new Date().addMonths(1).format('yyyyMMdd'));//20130104

console.log(new Date().minusMonths(1).format('yyyyMMdd'));//20121104

console.log(new Date().addDays(1).format('yyyyMMdd'));//20121205

console.log(new Date().minusDays(1).format('yyyyMMdd'));//20121203

console.log(new Date().addMinutes(1).format('yyyyMMdd hh:MM:ss'));//20121204 11:28:38

console.log(new Date().minusMinutes(1).format('yyyyMMdd hh:MM:ss'));//20121204 11:26:38

console.log(new Date().addSeconds(1).format('yyyyMMdd hh:MM:ss'));//20121204 11:27:39

console.log(new Date().minusMinutes(1).format('yyyyMMdd hh:MM:ss'));//20121204 11:26:38

console.log('20121204140135'.format('yyyyMMdd hh:MM:ss'));
