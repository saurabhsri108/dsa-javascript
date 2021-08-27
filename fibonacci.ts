const fibonacci = (numIndex: number): number => {
  if (numIndex === 0 || numIndex === 1) return 1;

  const nums: Array<number> = [1, 1];

  for (let i = 2; i <= numIndex; i++) {
    nums.push(nums[i - 2] + nums[i - 1]);
  }

  return nums[numIndex];
};

// [1, 1, 2, 3, 5, 8];
console.log(
  fibonacci(0),
  fibonacci(1),
  fibonacci(2),
  fibonacci(3),
  fibonacci(4),
  fibonacci(5),
  fibonacci(6)
);
