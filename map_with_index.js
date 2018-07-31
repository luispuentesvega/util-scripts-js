let countries = [
    {
        id:1,
        name:'Colombia'
    },{
        id:2,
        name:'Canada'
    },
];

countries.map((item, index) => {
   console.log(`(${index})=>${item.name}`);
});

/*
(0)=>Colombia
(1)=>Canada

 */