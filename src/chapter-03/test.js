var tellType = arg => console.log(typeof arg);

const data = 1;
tellType(data);

const dataFn = () => console.log("I`m a function");
tellType(dataFn);

tellType = arg => {
  if (typeof arg === "function") {
    arg();
  } else {
    console.log("The passed data is ", arg);
  }
};

tellType(data);
tellType(dataFn);

// Fn => String
let crazy = () => String;

console.log(crazy()); // [Function: String]

let fn = crazy();
console.log(fn("HOC")); // HOC

// 等同于
crazy()("HOC"); // HOC

const arr = [3, 4, 20, 5, 6, 1, 7, 8];
const sortArr = arr.sort((a, b) => a - b);
console.log(arr, sortArr);
