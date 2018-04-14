let arr=[96,97,107,109,114];

let id_test = 114;
const result = arr.filter(id => id == id_test);
if(result.length>0)
    console.log('Validate Pwd');
else
    console.log('Dont must Validate Pwd');
