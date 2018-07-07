let str = 'Hello  How  are you ? My N ame is    Luis';
let arr = str.split(' ');
let tmpArr = arr.filter(item=>{
    if(item.trim().length>0){
        return item;
    }
});
console.log(tmpArr);