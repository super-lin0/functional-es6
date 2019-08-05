var removeDuplicates = function(nums) {
  let results = [];
  for (let value of nums) {
    if (results.findIndex(number => number === value) === -1) {
      results.push(value);
    }
  }

  return results;
};

console.log(removeDuplicates([1, 2, 1]));
