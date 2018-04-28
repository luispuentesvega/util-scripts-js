function first(){
    // Simulate a code delay
    setTimeout( function(){
        console.log(1);
    }, 500 );
}
function second(){
    console.log(2);
}
first();
second();

//Create a CallBack
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

doHomework('Math', function(){
    console.log('Finished my homework!');
});

function alertFinish(){
    console.log('Finished my homework!');
}

doHomework('Science', alertFinish);