function majorityElement(nums: number[]): number {
  const n: number = nums.length;
  const average: number = n / 2;
  let previous: number = nums[0];
  let count: number = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] === previous) {
      count++;
      if (count > average) {
        return nums[i];
      }
      continue;
    }
 
    count = 1;
    previous = nums[i];
  }

  return previous;
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));