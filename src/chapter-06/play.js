import { curry } from "../lib/es6-functional";

const add = (num1, num2) => num1 + num2;

console.log(curry(add)(4)(4));

const genericTable = (x, y) => x * y;

const tableOf2 = curry(genericTable)(2);
const tableOf3 = curry(genericTable)(3);
const tableOf4 = curry(genericTable)(4);

console.log("Tables via currying");
console.log("2 * 2 = ", tableOf2(2));
console.log("2 * 3 = ", tableOf2(2));
console.log("2 * 4 = ", tableOf2(2));
console.log("3 * 2 = ", tableOf3(2));
console.log("3 * 3 = ", tableOf3(3));
console.log("3 * 4 = ", tableOf3(4));
console.log("4 * 2 = ", tableOf4(2));
console.log("4 * 3 = ", tableOf4(3));
console.log("4 * 4 = ", tableOf4(4));

const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
  if (mode === "DEBUG") {
    console.debug(initialMessage, errorMessage + " at line: " + lineNo);
  } else if (mode === "ERROR") {
    console.error(initialMessage, errorMessage + " at line: " + lineNo);
  } else if (mode === "WARN") {
    console.warn(initialMessage, errorMessage + " at line: " + lineNo);
  } else {
    throw new Error("Wrong mode");
  }
};

// loggerHelper("DEBUG", "Error at stat.js", "Invalid argument passed", 35);

// 在数组内容中查找数字
let match = curry(function(expr, str) {
  return str.match(expr);
});

let hasNumber = match(/[0-9]+/);
const filter = curry(function(f, ary) {
  return ary.filter(f);
});

let findNumbersInArray = filter(hasNumber);

console.log(findNumbersInArray(["js", "number1"]));

// 求数组的平方
let map = curry((f, ary) => ary.map(f));
let sequreAll = map(x => x * x);

console.log(sequreAll([1, 2, 3]));
