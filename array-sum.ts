const arraySum = (arr: Array<number>): number => {
  return arr.reduce((acc: number, curr: number): number => {
    // 1
    return acc + curr; // n
  }, 0);
};

// T = 1 + n = O(n)

console.log(arraySum([1, 2, 3, 4, 5]));
