const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 3));

var filterQs = function(xs) {
  return xs.filter(function(x) {
    return x.match(/q/i);
  });
};
