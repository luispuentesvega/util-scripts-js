const input = 54321;

function processInput(input) {
    const inputArray = input.toString().split('');
    inputArray.reverse();
    return inputArray.join('');
}

console.log(processInput(input));//123454
