function fixhtml(html){
    var div = document.createElement('div');
    div.innerHTML=html
    return (div.innerHTML);
}

let fixed = fixhtml("<b>some text")
console.log(fixed);