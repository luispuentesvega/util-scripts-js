//1.Replace just the first match
let myStr = 'My little Alligator 🐊 I have a little Alligator';
//console.log(myStr.replace('Alligator', 'gator'));
//Output: My little gator 🐊 I have a little Alligator

//1.Replace all the matches
str = myStr.replace(new RegExp('Alligator','g'), 'gator').replace(new RegExp('a', 'g'), 'e');
//console.log('Final:',str);
//Output: Final: My little gator 🐊 I have a little gator


let [new_first_word, new_website] = "11ww111云顶彩吧qqqqqqqqqqwww.google.com".replace(/www./,'&').split('&');
console.log('first_word:',new_first_word);
console.log('website:',new_website);

let url ='https://api.ruok.co/upload/2018-03/0_20180328032746.png';
str = url.replace(new RegExp('https://api.ruok.co/upload'), '...');
console.log(str);
