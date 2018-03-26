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

wild_animals = animals.filter(v => v.type=='wild').map(v=>v.name).join(',')
console.log(wild_animals);
//Output : Monkey,Cocodrile