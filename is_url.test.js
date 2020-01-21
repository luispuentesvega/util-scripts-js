const isUrl = require('./is_url');

describe('isURL.js', () => {
    test('Shall return true with a real url', () => {
        expect(isUrl('www.google.com')).toBeTruthy();
    });

    test('Shall be falsy for a no url given', () => {
        expect(isUrl('luis')).toBeFalsy();
    });
});