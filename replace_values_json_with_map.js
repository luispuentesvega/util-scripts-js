
let json = [{
    name:'Luis',
    amount:'12,00.2'
},{
    name:'Ana',
    amount:'13,00.2'
},{
    name:'Peter',
    amount:'12.00.2'
}
];

//Replace on amount column the , simbol by .
json.map(item =>{
    item.amount = item.amount.replace(new RegExp (',','g'), '.');
});

console.log(json);
/* Output:
[ { name: 'Luis', amount: '12.00.2' },
  { name: 'Ana', amount: '13.00.2' },
  { name: 'Peter', amount: '12.00.2' } ]
 */
