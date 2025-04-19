function modifyElements(nums: number[]): number | null {
  let count = 0;
  let candidate: number | null = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += candidate === num ? +1 : -1;
  }

  return candidate;
}

console.log(modifyElements([3,2,3]));
console.log(modifyElements([2,2,1,1,1,2,2]));