let countries = [
  'Colombia',
  'Canada',
  'USA',
  'Cambodia',
  'China',
  'Vietnam'
];

function chunk(a, l) {
    if (a.length == 0) return [];
    else return [a.slice(0, l)].concat(chunk(a.slice(l), l));
}

//console.log(countries);
//console.log(countries.join(', '));
let arrCountries = chunk(countries, 2);
let newHtml = `<div>`;
arrCountries.map(val => {
    newHtml+= `<div>${val.join(',')}</div>`;
});
newHtml+=`</div>`;
console.log(newHtml);
//<div><div>Colombia,Canada</div><div>USA,Cambodia</div><div>China,Vietnam</div></div>