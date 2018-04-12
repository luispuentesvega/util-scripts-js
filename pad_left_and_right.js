let str = 'Luis'
console.log(str.padStart('20'))
//Output:                 Luis
console.log(str.padStart('20','-'))
//Output: ----------------Luis
console.log(str.padEnd('20','-'))
//Output: Luis----------------

let prices = ['100', '1.2', '3', '1000', '2.5'];

let format = prices.map(value => {
    let nbr = parseFloat(value).toFixed(2);
    return ('$' + nbr.toString()).padStart(9);
});
console.log(format);
//[ '  $100.00', '    $1.20', '    $3.00', ' $1000.00', '    $2.50' ]

