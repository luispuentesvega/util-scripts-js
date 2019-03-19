async function myFunction() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {console.log("1.done!");resolve("Done")}, 1000)
    });

    let result = await promise; // wait until the promise resolves (*)
    console.log('2.Completed the await...');
    //console.log(result); // "done!"
}

myFunction();
//Output:
//1.done!
//2.Completed the await....


function normalFunction() {
    setTimeout(() =>{
        console.log('1.Inside the setTimeout');
    }, 1000);

    console.log('2.Response of the normal function');
}
normalFunction();
//Output:
//2.Response of the normal function
//1.Inside the setTimeout