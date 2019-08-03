const forEach = (array, fn) => {
  let i;
  for (i = 0; i < array.length; i++) fn(array[i]);
};

const forEachObj = (object, fn) => {
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      fn(property, object[property]);
    }
  }
};

/**
 * 接收一个断言，如果断言为false，则调用fn
 * @param {Boolean} predicate
 * @param {Function} fn
 */
const unless = (predicate, fn) => {
  if (!predicate) {
    fn();
  }
};

/**
 *
 * @param {Number} times
 * @param {Function} fn
 */
const times = (times, fn) => {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
};

/**
 * 对数组中的每一项运行给定的函数，如果该函数对每一项都返回true，则结果返回true。
 * @param {Array} array
 * @param {Function} fn
 */
const every1 = (array, fn) => {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    result = result && fn(array[i]);
  }
  return result;
};
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

const sortBy = property => {
  return (a, b) =>
    a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
};

export { forEach, forEachObj, unless, times, every, some, sortBy };
