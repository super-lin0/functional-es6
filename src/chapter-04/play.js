import { tap, forEach, unary, once, memoized } from "../lib/es6-functional.js";

tap("func")(it => console.log("value is ", it));

forEach([1, 2, 3], a => tap(a)(() => console.log(a)));

const arr = ["1", "2", "3"];
const res = arr.map(unary(parseInt));
console.log(res);

const doPayment = once(() => console.log("First once"));

doPayment();
doPayment();
doPayment();

let fastFactorial = memoized(n => {
  if (n === 0) {
    return 1;
  }
  return n * fastFactorial(n - 1);
});

console.log(fastFactorial(5));
console.log(fastFactorial(3));
