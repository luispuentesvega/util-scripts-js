//1.Replace just the first match
let myStr = 'My little Alligator 🐊 I have a little Alligator';
console.log(myStr.replace('Alligator', 'gator'));
//Output: My little gator 🐊 I have a little Alligator

//1.Replace all the matches
str = myStr.replace(new RegExp('Alligator', 'g'), 'gator');
console.log('Final:',str);
//Output: Final: My little gator 🐊 I have a little gator