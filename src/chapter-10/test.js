function* gen() {
  return "First generator";
}

let generatorResult = gen();

console.log(generatorResult);
console.log(generatorResult.next());
console.log(generatorResult.next().value);

function* generatorSequence() {
  yield "First";
  yield "Second";
  yield "Third";
}

let generatorSequenceResult = generatorSequence();

console.log("done value for the first time", generatorSequenceResult.next());
console.log("done value for the second time", generatorSequenceResult.next());
console.log("done value for the third time", generatorSequenceResult.next());
console.log("done value for the four time", generatorSequenceResult.next());

for (let value of generatorSequence()) {
  console.log("for a value of generatorSequence is", value);
}

function* sayFullName() {
  var firstName = yield;
  var secondName = yield;
  console.log(firstName, secondName);
}

let sayFullNameResult = sayFullName();

console.log(sayFullNameResult.next());
console.log(sayFullNameResult.next("zhang"));
console.log(sayFullNameResult.next("san"));
