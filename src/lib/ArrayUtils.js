const forEach = (array, fn) => {
  let i;
  for (i = 0; i < array.length; i++) fn(array[i]);
};

/**
 * 模拟数组Map方法
 * @param {Aray} array
 * @param {Function} fn
 */
const map = (array, fn) => {
  let result = [];
  for (let i of array) {
    result.push(fn(i));
  }
  return result;
};

/**
 *对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。
 * @param {Array} array
 * @param {Function} fn
 */
const filter = (array, fn) => {
  let results = [];
  for (let value of array) {
    if (fn(value)) {
      results.push(value);
    }
  }
  return results;
};

/**
 * 把嵌套数组连接到一个数组中
 * @param {Array} array
 * @param {Function} fn
 */
const concatAll = (array, fn) => {
  let results = [];
  for (let value of array) {
    results.push.apply(results, value);
  }
  return results;
};

/**
 * 模拟JS中的reduce函数
 * @param {*} array
 * @param {*} fn
 * @param {*} initiaValue
 */
const reduce = (array, fn, initiaValue) => {
  let accumlator;
  if (initiaValue !== undefined) {
    accumlator = initiaValue;
  } else {
    accumlator = array[0];
  }
  if (initiaValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      accumlator = fn(accumlator, array[i]);
    }
  } else {
    for (let value of array) {
      accumlator = fn(accumlator, value);
    }
  }

  return [accumlator];
};

const zip = (leftArr, rightArr, fn) => {
  const results = [];
  for (let i = 0; i < Math.min(leftArr.length, rightArr.length); i++) {
    results.push(fn(leftArr[i], rightArr[i]));
  }

  return results;
};

// /**
//  * 对数组中的每一项运行给定的函数，如果该函数对每一项都返回true，则结果返回true。
//  * @param {Array} array
//  * @param {Function} fn
//  */
// const every1 = (array, fn) => {
//   let result = true;
//   for (let i = 0; i < array.length; i++) {
//     result = result && fn(array[i]);
//   }
//   return result;
// };
/**
 * 对数组中的每一项运行给定的函数，如果该函数对每一项都返回true，则结果返回true。
 * @param {Array} array
 * @param {Function} fn
 */
const every = (array, fn) => {
  let result = true;
  for (let item of array) {
    result = result && fn(item);
  }
  return result;
};

/**
 *  对数组中的每一项运行给定函数，如果该函数任意一项返回true，则返回true。
 * @param {Array} array
 * @param {Function} fn
 */
const some = (array, fn) => {
  let result = true;
  for (let item of array) {
    result = result || fn(item);
  }
  return result;
};

export { map, every, some, forEach, filter, reduce, concatAll, zip };
