let arr = {
    "estado": 0,
    "configuration": {
        "title": "Mi titulo",
        "value": null,
}};

if('value' in arr.configuration && arr.configuration.value!=null && 'list' in arr.configuration.value){
    console.log('Exist Value');
}
else{
    console.log('Doesnt Exist Value');
}
//Output: Doesnt Exist Value
