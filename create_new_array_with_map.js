let animals = [{
    name: 'Horse',
    type:'domestic'
},{
    name: 'Monkey',
    type:'wild'
},{
    name: 'Cocodrile',
    type:'wild'
}];

let new_animals = animals.map(item => {
    return {
        name: item.name,
        type: item.type,
        country: 'Colombia'
    }
});

console.log(new_animals);
/* Output:
[ { name: 'Horse', type: 'domestic', country: 'Colombia' },
  { name: 'Monkey', type: 'wild', country: 'Colombia' },
  { name: 'Cocodrile', type: 'wild', country: 'Colombia' } ]
 */