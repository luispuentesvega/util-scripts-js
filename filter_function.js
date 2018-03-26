var people = [
    {name:'Luis', age:'25', gender:'M'},
    {name:'Maria', age:'25', gender:'F'},
    {name:'Peter', age:'14', gender:'M'},
    {name:'Ana', age:'13', gender:'F'},
    {name:'Caro', age:'17', gender:'F'},
    {name:'Camila', age:'30', gender:'F'},
    {name:'Sergio', age:'11', gender:'M'}
];

//Let's go to get the old people (people who age are 18 or more)
var oldPeople = people.filter(function(person){
    return person.age >=18;
});

console.log(oldPeople);
/*
The output will be the next:
	[ { name: 'Luis', age: '25', gender: 'M' },
	{ name: 'Maria', age: '25', gender: 'F' },
	{ name: 'Camila', age: '30', gender: 'F' } ]
*/