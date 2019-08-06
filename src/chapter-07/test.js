const compose = (f1, f2) => c => f1(f2(c));

const composeN = (...fns) => value =>
  fns.reverse().reduce((acc, fn) => fn(acc), value);

const add = x => x + 1;
const multipy = x => x * 9;

const composeFunc = compose(
  add,
  multipy
);

console.log(composeFunc(5));

// 对给定的数字四舍五入求值
let data = parseFloat("3.56");
let number = Math.round(data);
console.log(number);

console.log(
  compose(
    Math.round,
    parseFloat
  )(3.56)
);

let splitIntoSpaces = str => str.split(" ");
let count = array => array.length;
let oddOrEven = ip => (ip % 2 === 0 ? "Even" : "Odd");

console.log(count(splitIntoSpaces("I'm a student")));
console.log(
  compose(
    count,
    splitIntoSpaces
  )("I'm a student")
);

console.log(composeN(oddOrEven, count, splitIntoSpaces)("I'm a student"));

console.log("===pipe===");
const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

console.log(
  pipe(
    splitIntoSpaces,
    count,
    oddOrEven
  )("I'm a student Tom")
);
