function fact(number) {
  if (number >= 1) return number * fact(number - 1);
  return 1;
}

const factorial = fact(5);

function fib(number) {
  if (number >= 3) return fib(number - 1) + fib(number - 2);
  else return 1;
}

const fibonacci = fib(6);
console.log(fibonacci);
