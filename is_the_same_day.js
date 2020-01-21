const moment = require('moment');

const isSameDay = (inputDate) => {
    const today = moment().format('YYYY-MM-DD');
    return moment(today).isSame(inputDate);
}
// console.log('IsSameDay:', isSameDay('2020-01-21'));
module.exports = isSameDay;