const moment = require('moment');
const isSameDay = require('./is_the_same_day');

test('is_the_same_day', () => {
    const today = moment().format('YYYY-MM-DD');
    expect(isSameDay(today)).toBeTruthy();
});