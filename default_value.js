// Using || after the variable you assigne a default value
function foo(value) {
    var element;
    element = value || "Default value";
    console.log(element);
}

foo();