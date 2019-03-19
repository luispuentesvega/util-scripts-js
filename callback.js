const add = (x, y) => {
    return x+y
}

const multiply = (x,y) => {
    return x*y
}

function applyOperator(x, y, callback) {
    return callback(x, y)
}

console.log(applyOperator(5,5, add));//10
console.log(applyOperator(5,5, multiply));//25