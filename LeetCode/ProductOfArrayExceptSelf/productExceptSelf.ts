function productExceptSelf(nums: number[]): number[] {
  let n: number = nums.length;
  let response: number[] = [];
  let prefix: number = 1;
  for (let i = 0; i < n; i++) {
    response[i] = prefix;
    prefix *= nums[i];
  }

  let suffix: number = 1;
  for (let i = n - 1; i >= 0; i--) {
    response[i] *= suffix;
    suffix *= nums[i];
  }

  return response;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));