let filters = [{
    key: 'type4',
    value: '5'
},{
    key: 'type3',
    value: '5'
}];

filters[0]['value']='bbb';

console.log(filters);
/*
let rta = filters.filter(v => v.key=='type4');
if(rta.length>0){
    console.log('Exist position');
}
else{
    console.log('Dont Exist position');
}
*/