let _arr = [];
_arr['name'] = 'Luis';
_arr['country'] = 'Colombia';
_arr['city'] = 'BOgota';
//console.log(_arr);
/*
let obj = Object.setPrototypeOf(_arr, Object.prototype);
console.log(obj);
console.log(obj.name);//Luis
*/
var convArrToObj = function(array){
    var thisEleObj = new Object();
    if(typeof array == "object"){
        for(var i in array){
            var thisEle = convArrToObj(array[i]);
            thisEleObj[i] = thisEle;
        }
    }else {
        thisEleObj = array;
    }
    return thisEleObj;
}

let newObj = convArrToObj(_arr);
console.log(newObj);