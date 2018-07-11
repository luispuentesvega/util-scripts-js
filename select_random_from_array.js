var countries = ["Colombia", "Venezuela", "Canada", "Ecuador", "USA", "China", "Cambodia", "Vietnam"];

function pickRandomCountry(countries) {
    var index = Math.floor(Math.random() * countries.length);
    return countries[index];
}

console.log(pickRandomCountry(countries));
//Canada