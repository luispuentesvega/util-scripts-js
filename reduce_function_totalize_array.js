var people = [
    {name:'Luis', age:'25', gender:'M'},
    {name:'Maria', age:'25', gender:'F'},
    {name:'Peter', age:'14', gender:'M'},
    {name:'Ana', age:'13', gender:'F'},
    {name:'Caro', age:'17', gender:'F'},
    {name:'Camila', age:'30', gender:'F'},
    {name:'Sergio', age:'11', gender:'M'}
];

//Let's go to get the amount of all ages
var allAges = people.reduce((function(sum, person){
    console.log('Age '+person.age);
    return parseInt(sum) + parseInt(person.age);
}), 0);

console.log('All ages: '+allAges);
//Output: All ages: 135