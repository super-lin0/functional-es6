var name = "outer";
var fn = arg => {
  let inner = () => {
    console.log(name);
  };
  return inner;
};

fn()();

const arr = ["1", "2", "3"];
const res = arr.map(parseInt);
console.log(res);
