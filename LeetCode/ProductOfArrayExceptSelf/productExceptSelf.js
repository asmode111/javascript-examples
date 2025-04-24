function productExceptSelf(nums) {
    var n = nums.length;
    var response = [];
    var prefix = 1;
    for (var i = 0; i < n; i++) {
        response[i] = prefix;
        prefix *= nums[i];
    }
    var suffix = 1;
    for (var i = n - 1; i >= 0; i--) {
        response[i] *= suffix;
        suffix *= nums[i];
    }
    return response;
}
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
