let add = (() => {
    //This variable is declarated as soon as the file is executed
    let counter = 0;
    console.log(`counter1`,counter);

    return () => {
        counter+=1;
        console.log(`counter2:`,counter);
        return counter;
    }
})();

add();
add();
add();
add();
add();
console.log(add());