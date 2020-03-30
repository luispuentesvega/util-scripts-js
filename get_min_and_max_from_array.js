let arrMinMax = [];
arrMinMax.push({
    min: 1,
    max: 100
});
arrMinMax.push({
    min: 3,
    max: 50
});
arrMinMax.push({
    min: -1,
    max: 5000
});

let minNum = arrMinMax.reduce((m, o) => m < o.min ? m: o.min, +Infinity),
maxNum = arrMinMax.reduce((M, o) => M > o.max ? M: o.max, -Infinity);

console.log(`Min(${minNum}) Max(${maxNum})`);