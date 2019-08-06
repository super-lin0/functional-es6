import { curry, curryN, partial } from "../lib/es6-functional";

const _ = require("lodash");

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
const find = (expr, str) => str.match(expr);
const findNum = curry(find)(/[0-9]+/);

const filter = (fn, array) => array.filter(fn);
const findNumbersInArray = curry(filter)(findNum);

console.log("find numbers in array", findNumbersInArray(["join", "java1"]));

// 求数组的平方
let map = curry((f, ary) => ary.map(f));
let sequreAll = map(x => x * x);

console.log(sequreAll([1, 2, 3]));

const multipy = (x, y, z, n) => x * y * z * n;

console.log("curryN(multipy):", curryN(multipy));
console.log("curryN(multipy)(1):", curryN(multipy)(1));
console.log("curryN(multipy)(1)(2):", curryN(multipy)(1)(2));
console.log("curryN(multipy)(1)(2)(3)", curryN(multipy)(1)(2)(3));
console.log("curryN(multipy)(1)(2)(3)(4)", curryN(multipy)(1)(2)(3)(4));

console.log("=====偏应用======");
setTimeout(() => console.log("Do x task"), 10);
setTimeout(() => console.log("Do y task"), 10);

const setTimeoutWrapper = (time, fn) => setTimeout(fn, time);

let delayTenMs = curry(setTimeoutWrapper)(10);
delayTenMs(() => console.log("Do x task"));
delayTenMs(() => console.log("Do y task"));

const delayTenMsWithPartial = partial(setTimeout, undefined, 10);
delayTenMsWithPartial(() => console.log("Do xz task"));
delayTenMsWithPartial(() => console.log("Do xn task"));

let obj = { foo: "foo", bar: "bar" };
console.log("JSON:", JSON.stringify(obj));
console.log("JSON:", JSON.stringify(obj, null, 2));

const prettyPrintJson = partial(JSON.stringify, undefined, null, 2);
console.log("pretty json", prettyPrintJson(obj));

const _match = _.curry((expr, str) => str.match(expr));
const _replace = _.curry((what, replacement, str) =>
  str.replace(what, replacement)
);
const _filter = _.curry((fn, array) => array.filter(fn));
const _map = _.curry((fn, array) => array.map(fn));

console.log(_match(/\s+/g, "Hello World"));

const hasSpaces = _match(/\s+/g);

console.log("hasSpaces:", hasSpaces("Hello World"));

const findSpaces = _filter(hasSpaces);

console.log("find spaces:", findSpaces(["Join", "Hello World"]));
