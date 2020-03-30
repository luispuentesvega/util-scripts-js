const form = {
    name: {
        type: 'input',
        config: {
            placeholder: 'Your name'
        }
    },
    city: {
        type: 'select',
        config: {
            placeholder: 'Your city'
        }
    }
}

const transformedArray = [];
for (let key in form) {
    transformedArray.push({
        key: key,
        input: form[key]
    });
}

console.log(transformedArray);
/*
[ { key: 'name', input: { type: 'input', config: [Object] } },
  { key: 'city', input: { type: 'select', config: [Object] } } ]
 */