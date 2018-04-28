let newImage = 'http://mywebsite.com/img001.png';
$("#img").attr('src', "");
setTimeout(function(){
    $("#img").attr('src', newImage);
}, 0);