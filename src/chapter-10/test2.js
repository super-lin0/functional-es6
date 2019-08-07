console.log("=====异步=======");
let getDataOne = cb => setTimeout(() => cb("dummy data one"), 1000);
let getDataTwo = cb => setTimeout(() => cb("dummy data two"), 1000);

getDataOne(data => console.log("data received", data));
getDataTwo(data => console.log("data received", data));

console.log("改造方案");

let generator;
let getDataByGenOne = () =>
  setTimeout(() => generator.next("dummy data one"), 1000);

let getDataByGenTwo = () =>
  setTimeout(() => generator.next("dummy data two"), 1000);

function* main() {
  let dataOne = yield getDataByGenOne();
  let dataTwo = yield getDataByGenTwo();
  console.log("dataOne", dataOne);
  console.log("dataTwo", dataTwo);
}

generator = main();

generator.next();
