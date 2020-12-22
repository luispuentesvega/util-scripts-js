const dog = {
  sound: 'woff',
  makeSound: function(dogName) {
    return `The dog ${dogName} makes the sound: ${this.sound}`;
  },
};

let makeSound = dog.makeSound;
let boundMakeSound = makeSound.bind(dog, 'Baco');
// The bind method returns a new function, when invoked, has its this sets to a specific value.

// The next are the parameters of the bind function
/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 * @param thisArg An object to which the this keyword can refer inside the new function.
 * @param argArray A list of arguments to be passed to the new function.
 */
// bind(this: Function, thisArg: any, ...argArray: any[]): any;

console.log(makeSound.toString());

console.log(boundMakeSound.toString());

console.log(boundMakeSound());
