function memoize(fn) {
  const cache = {};

  return (...args) => {
    if (cache[args]) return cache[args];

    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

const slowFunc = (number) => {
  for (let i = 0; i <= number; i++) {
    if (i === number) return i;
  }
};

const fastFunc = memoize(slowFunc);

console.time();
// console.log(slowFunc(2000000000));
console.log(fastFunc(2000000000));
console.timeEnd();

console.time();
// console.log(slowFunc(2000000000));
console.log(fastFunc(2000000000));
console.timeEnd();
