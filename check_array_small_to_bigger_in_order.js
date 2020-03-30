const arr = [
    { number: 1 },
    { number: 2 },
    { number: 4 },
    { number: 6 },
];
let startNum = 0;
let isOrderCorrectly = true;
arr.map(num => {
    if (parseInt(num.number)<=parseInt(startNum)) {
        isOrderCorrectly = false;
    }
    startNum = num.number;
});

console.log('isOrderCorrectly:: ',isOrderCorrectly);