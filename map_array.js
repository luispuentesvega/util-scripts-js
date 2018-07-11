let arr = [
    {
        "2": "Luis"
    },
    {
        "3": "Puentes"
    },
    {
        "4": "Vega"
    },
    {
        "10": "Colombia"
    }
];
let arr_out = [];
Object.keys(arr).map(key => {
    var arra = Object.values(JSON.parse(JSON.stringify(arr[key], null, 2)));
    arr_out.push({
        value: arra[0]
    });
});
console.log(`Array Out: ${JSON.stringify(arr_out)}`);

