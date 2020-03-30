var axios = require('axios');

//Async function, returns a Promise
async function doSomeAsyncStuff(i) {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+i) .then(res=>{
            resolve(res.data);
        })
        .catch(error=>{
            console.log(`Error (${error})`);
        });

    });
}

const callTooManyTimes = async() => {
    var promises = [];
    for(let i=1; i<=2; i++){
        let promise = await doSomeAsyncStuff(i);
        promises.push(promise);
    }
    let arrTmp = [];
    await Promise.all(promises).then(function(result) {
        arrTmp.push(result);
    });
    return Promise.resolve(arrTmp);
}

callTooManyTimes().then(res=>{
    console.log(res);
});
/*
[ [ { userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' },
    { userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' } ] ]
*/
