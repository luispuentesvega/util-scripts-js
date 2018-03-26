//Validate is URL either https or without it
var matcher = /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{3,6}$/;
function isUrl(string){
    return matcher.test(string);
}
console.log(isUrl('https://www.gooa.com'));