const inputString = 'I am a fancy string with too many commas ,,, ,, , , , , , another comma is here ,,,, and other symbols @@=_+__;';
const removeCommas = str => str.replace(/,/g, '');
console.log(inputString);//I am a fancy string with too many commas ,,, ,, , , , , , another comma is here ,,,, and other symbols @@=_+__;
console.log(removeCommas(inputString));//I am a fancy string with too many commas        another comma is here  and other symbols @@=_+__;