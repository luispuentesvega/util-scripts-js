let animals = [{
    name: 'Horse'
},{
    name: 'Monkey'
}];

animals.unshift({
    name: 'Cocodrile'
});

console.log(animals);
//Output: [ { name: 'Cocodrile' }, { name: 'Horse' }, { name: 'Monkey' } ]