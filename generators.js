function* generatorSample() {
  yield 'This';
  yield 'is';
  yield 'a';
  yield 'generator';
  yield 'sample';
}

const calling = generatorSample();

console.log(calling.next().value); //This

for (const val of calling) {
  console.log(val);//is
    //a
    //generator
    //sample
}
