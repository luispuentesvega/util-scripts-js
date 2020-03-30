function buildName(name) {
    var greeting = `Hi, You are ${name}`;
    return () => {
        var welcome = `${greeting}, Welcome!`;
        console.log(welcome);
    }
}

var sayMyName = buildName('Luis');
//console.log(sayMyName);
sayMyName();