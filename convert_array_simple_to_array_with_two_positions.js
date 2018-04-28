let items= [
    { name: 'Vue' }
]

function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
}

console.log(items)
console.log(items.length)
let num = Math.ceil(parseFloat(items.length/2))
console.log(num)
console.log('--------------')
//Loop the array
let newArray=[]
let pos = 0
let post_inside = 0
cant = (oddOrEven(num)=='odd') ? num+1 : num;
console.log('Cantttttt (',cant,')');
for (let i=0; i<cant; i++){
    for(let a=0; a<=1; a++){
        console.log('(',i,') pos inside '+post_inside,' => ',items[post_inside],' Next (',post_inside+1,')')
        if(items[post_inside+1]==undefined){
            //console.log('Dont exist (',post_inside+1,')');
            console.log('If');
            break;
        }
        else{
            console.log('Else');
            //console.log('Exist(',post_inside+1,')');
        }
        post_inside = post_inside+1
    }
    if(!items[post_inside]){
        //console.log('Dont exist (',post_inside+1,')');
        break;
    }

    /*
    newArray[pos] = [{
        name:items[post_inside].name
    }]
    post_inside = post_inside + 1
    if(items[post_inside]){
        newArray[pos].push({
            name:items[post_inside].name
        })
        post_inside = post_inside + 1
    }
    pos = pos + 1
    */
}

console.log(newArray)