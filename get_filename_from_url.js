const url = 'http://api.ruokdev.co:9999/upload/2019-01/0_20190118021003.jpg';
const fileName = url.substring(url.lastIndexOf('/')+1);
console.log(fileName);