const sum = (num1, num2) => num1 + num2;

function callSum1(num1, num2) {
  return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));

const array = [[{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 4 }]];
let results = [];

for (let value of array) {
  // results.push.apply(results, value);
  results.push(value);
}

console.log(results);

console.log([1, 2, 3].reduce((total = 0, num) => (total += num)));
console.log([1, 2, 3].reduce((total = 1, num) => (total *= num)));
