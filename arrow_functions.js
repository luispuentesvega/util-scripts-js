/*

1.
    parameters => expression
    // is equivalent to:
    function (parameters){
      return expression;
    }


 */

var age = num => 'My age is '+num
console.log(age(21));
//Output: My age is 21

var info = (name,age) => 'My name is '+name+' and I am '+age
console.log(info('Luis',21));
//My name is Luis and I am 21

