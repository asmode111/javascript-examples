function majorityElement(nums) {
    var n = nums.length;
    var average = n / 2;
    var previous = nums[0];
    var count = 1;
    for (var i = 1; i < n; i++) {
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
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
