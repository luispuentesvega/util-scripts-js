let _arr = [];
_arr['name'] = 'Luis';
_arr['country'] = 'Colombia';
_arr['city'] = 'BOgota';
console.log(_arr);

let obj = Object.setPrototypeOf(_arr, Object.prototype);
console.log(obj);
console.log(obj.name);//Luis