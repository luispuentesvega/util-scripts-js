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
let str_new = '云顶彩吧 （ www.imok.world ）开展网上购买彩票业务。本协议为用户在 www.imok.world 网站上进行彩票购买的事宜而订立，具体条款如下：';
