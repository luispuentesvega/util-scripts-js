let url = "https://api.images.co//upload/2017-10/_20171018075323.png"
arr_url = url.split('/');
console.log(arr_url);
console.log('Lenght : ',arr_url.length);
console.log('File Name:',arr_url[parseInt(arr_url.length)-1]);
//Output: File Name: _20171018075323.png