import {
  forEachObj,
  unless,
  forEach,
  times,
  every,
  some,
  sortBy
} from "../lib/es6-functional.js";

var object = { name: "zhangsan", age: 18 };
//print the console
forEachObj(object, (key, val) => console.log(key, val));

forEach([1, 2, 3, 4, 5, 6, 7, 8], number =>
  unless(number % 2, () => console.log(number, "is a even"))
);

times(100, number => unless(number % 2, () => console.log(number, "is even")));

const array = [1, 2, 3, 4, 5, 2];

// 是否每个元素都大于2
const isLt2 = every(array, item => item > 2);
console.log("isEveryLt2 ", isLt2);

const isAllNan = every([NaN, NaN, NaN], isNaN);
console.log("isAllNaN:", isAllNan);

const isAllNaN = every([NaN, NaN, 2], isNaN);
console.log("isAllNaN", isAllNaN);

// 数组中元素是否有一些元素大于2
const isSomeLt2 = some(array, number => number > 2);
console.log("isSomeLt2:", isSomeLt2);

const peoples = [
  { name: "wlianna", age: 12 },
  { name: "beikete", age: 15 },
  { name: "aeilian", age: 35 }
];

const sortByName = peoples.sort(sortBy("name"));
console.log("sortByName", sortByName);

const sortByAeg = peoples.sort(sortBy("age"));
console.log("sortByAeg", sortByAeg);
