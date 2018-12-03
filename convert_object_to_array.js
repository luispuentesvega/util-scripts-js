const ingredients = {
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
};

let transformedIngredients = Object.keys(ingredients).map(key=> {
    return [...Array(ingredients[key])].map((_,i)=> {
        return key;
    });
});

console.log(transformedIngredients);
/*
[ [ 'salad' ],
  [ 'bacon' ],
  [ 'cheese', 'cheese' ],
  [ 'meat', 'meat' ] ]
 */