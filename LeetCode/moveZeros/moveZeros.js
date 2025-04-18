function moveZeros(nums) {
    var nextNonZeroIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nextNonZeroIndex] = nums[i];
            nextNonZeroIndex++;
        }
    }
    while (nextNonZeroIndex < nums.length) {
        nums[nextNonZeroIndex] = 0;
        nextNonZeroIndex++;
    }
    return nums;
}
console.log(moveZeros([0, 1, 0, 3, 12]));
