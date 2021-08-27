const arrayMin = (numbers: Array<number>): number => {
  if (numbers.length <= 0) return -1; // 1
  let min = numbers[0]; // 1

  for (const num of numbers) {
    // 1
    if (num < min) {
      // n
      min = num;
    }
  }

  return min; // 1
};

// Best case: number array is sorted -> never going inside comparison
// Worst case: number array is sorted in desc order -> going (n-1) times inside comparison
// Average case: scattered numbers without any sorting -> sometimes goes inside if condition, sometimes don't

// T = 1 + 1 + 1 + n + 1 = 4 + 1*n = 1*n = n = O(n)

console.log(arrayMin([]));
console.log(arrayMin([1, 2, 3, 4, 5, 0]));
