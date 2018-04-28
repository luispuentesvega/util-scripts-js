let url = "https://api.images.co//upload/2017-10/_20171018075323.png"
arr_url = url.split('/');
console.log(arr_url);
console.log('Lenght : ',arr_url.length);
console.log('File Name:',arr_url[parseInt(arr_url.length)-1]);
//Output: File Name: _20171018075323.png
let url2 = "https://ruok666.com/?r1=4100 152016188764603#reg"
arr_url2 = url2.split('?r=');
console.log('../?r='+(arr_url2[1] ? arr_url2[1]:'-'));