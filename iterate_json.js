let json = JSON.parse(JSON.stringify('{account: {amount:{edit:true,view:true},bankCard:{edit:true,view:true}}, report: {report1:{edit:true,view:true},report2:{edit:true,view:true}}}'));
Object.keys(json).map(key => {
    console.log('Key=>'+key+'===>');
})