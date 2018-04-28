let str ="云顶彩吧www.google.com";
let arr_str = str.replace(/\w/,'&').split('&');
if(!arr_str[0])
    console.log('Must fill correctly 1');
if(!arr_str[1])
    console.log('Must fill correctly 2');
console.log(arr_str[0]);
console.log('w'+arr_str[1]);
/* Output:
云顶彩吧
www.google.com
*/
//Version 2.0
let obs = 'Obersvacion | 云顶彩吧www.google.com'
let arr_str2 = obs.split('|');
arr_str2 = arr_str2.map(item=>item.trim());
console.log(arr_str2[0].trim());
console.log(arr_str2[1].trim());
console.log(arr_str2);
