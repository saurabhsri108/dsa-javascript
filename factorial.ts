const factorial = (number: number): number => {
  if (number < 1) return -1;
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
};

const recursiveFactorial = (number: number): number => {
  if (number < 1) return -1;
  if (number === 1) return 1;

  return number * recursiveFactorial(number - 1);
};

// T = O(n)

console.log(factorial(100));
console.log(recursiveFactorial(100));
