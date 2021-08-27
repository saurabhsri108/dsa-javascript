import isEven from "./is-even.ts";

const isPowerOf2 = (number: number): boolean => {
  if (number < 2) return false;
  if (!isEven(number)) return false;

  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (!isEven(dividedNumber)) return false;
    dividedNumber /= 2; // log n
  }

  return true;
}; // T = O(log2 n) = O(log n)

const isPowerOfTwo = (number: number): boolean => {
  if (number < 2) return false;
  return (number & (number - 1)) === 0;
}; // T = O(1)

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(10)); // false
