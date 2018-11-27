let var1 = "0";
let var2 = 1;
let var3 = '';
let var4 = 'Hello';
let var5 = "1";
let var6 = null;
let var7 = undefined;

const isBoolean = str => Boolean(parseInt(str));

console.log(isBoolean(var1));//False
console.log(isBoolean(var2));//True
console.log(isBoolean(var3));//False
console.log(isBoolean(var4));//False
console.log(isBoolean(var5));//True
console.log(isBoolean(var6));//False
console.log(isBoolean(var7));//False