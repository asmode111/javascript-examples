function modifyElements(nums) {
    var count = 0;
    var candidate = null;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (count === 0) {
            candidate = num;
        }
        count += candidate === num ? +1 : -1;
    }
    return candidate;
}
console.log(modifyElements([3, 2, 3]));
console.log(modifyElements([2, 2, 1, 1, 1, 2, 2]));
