const isPrime = (number: number): boolean => {
  if (number <= 0) throw new Error("Number should be greater than 0");
  if (number === 1 || number === 2) return true;
  for (let i = 2; i <= Math.sqrt(number); i++)
    if (number % i === 0) return false;

  return true;
};

// isPrime(0);
console.log(isPrime(4), isPrime(5), isPrime(6), isPrime(7));
