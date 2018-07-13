//npm install moment
var moment = require('moment');
console.log(moment().format());
//2018-07-13T19:42:26+07:00
;
console.log(moment().format('d/m/YYYY'));
console.log(moment("20111031", "YYYYMMDD").fromNow());
let newDate = moment().add(1, 'days').format('YYYY-MM-DD');
console.log(newDate);//2018-07-14