let str = 'Hello  How  are you ? My N ame is    Luis';
let arr = str.split(' ');
let tmpArr = arr.filter(item=>item.trim().length>0);
console.log(tmpArr);