const arrayToString = require('./array_to_string');

test('Convert array to String', () => {
    const input = ['Hello', 'World', 'Js'];
    expect(arrayToString(input)).toEqual('Hello,World,Js');
});