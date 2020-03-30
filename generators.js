function* generatorSample() {
  yield 'This';
  yield 'is';
  yield 'a';
  yield 'generator';
  yield 'sample';
  return 'end';
}

module.exports = generatorSample();

/*
const calling = generatorSample();
console.log(calling.next()); // The first time will print "This"
for (const val of calling) {
  console.log(val); //is
  //a
  //generator
  //sample
}
console.log(calling.next().done);//True
*/
