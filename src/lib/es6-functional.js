import * as arrayUtils from "./ArrayUtils";
import { Container } from "./Container";
import { MayBe } from "./MayBe";
import { Either } from "./Either";

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

const sortBy = property => {
  return (a, b) =>
    a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
};

const tap = value => fn => typeof fn === "function" && fn(value);

/**
 * 接收一个给定的多参数函数，并把它转换为一个只接受一个参数的函数
 * @param {*} fn
 */
const unary = fn => (fn.length === 1 ? fn : arg => fn(arg));

/**
 * 只需要运行一次给定函数
 * @param {*} fn
 */
const once = fn => {
  let done = false;
  return function() {
    return done ? undefined : ((done = true), fn.apply(this, arguments));
  };
};

/**
 *  缓存
 * @param {Function} fn
 */
const memoized = fn => {
  const lookupTable = [];
  return arg => lookupTable[arg] || (lookupTable[arg] = fn(arg));
};

/**
 * 柯里化
 * @param {*} binaryFn
 */
const curry = binaryFn => {
  return function(firstArg) {
    return function(secondArg) {
      return binaryFn(firstArg, secondArg);
    };
  };
};

const curryN = fn => {
  if (typeof fn !== "function") {
    throw Error("No function provided");
  }

  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function() {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
};

/**
 * 偏函数
 * @param {*} fn
 * @param  {...any} partialArgs
 */
const partial = function(fn, ...partialArgs) {
  let args = partialArgs.slice(0);
  return function(...fullArguments) {
    let arg = 0;
    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArguments[arg++];
      }
    }
    return fn.apply(this, args);
  };
};

/**
 * 函数式组合
 * @param {Function} f1
 * @param {Function} f2
 */
const compose = (f1, f2) => x => f1(f2(x));

/**
 * 多个函数组合
 * @param  {...any} fns
 */
const composeN = (...fns) => value =>
  arrayUtils.reduce(fns.reverse(), (acc, fn) => fn(acc), value);

/**
 * 管道函数，与组合函数作用相似，只不过处理数据流是从左至右的处理，左边的函数先处理
 * @param  {...any} fns
 */
const pipe = (...fns) => value =>
  arrayUtils.reduce(fns, (acc, fn) => fn(acc), value);

export {
  forEachObj,
  unless,
  times,
  sortBy,
  tap,
  unary,
  once,
  memoized,
  arrayUtils,
  curry,
  curryN,
  partial,
  compose,
  composeN,
  pipe,
  Container,
  MayBe,
  Either
};
