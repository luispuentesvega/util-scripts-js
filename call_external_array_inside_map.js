let arr = [['luis'],['puentes'] ,['vega']];

let ext = [1,2,3];

arr.map(item=>{
    console.log('Item:',item);
    item.map(child=> {
        console.log(child,'=>',ext[1]);
    })
})