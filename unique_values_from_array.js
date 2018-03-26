let names = [{value: 'Luis',title: 'Luis'},{value: 'Puentes',title: 'Puentes'},{value: 'Luis',title: 'Luis'}];
let dup = [...new Set(names.map(item => item.value))];
console.log(dup);
//Output: [ 'Luis', 'Puentes' ]