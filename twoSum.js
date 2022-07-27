/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let result = [];
    nums.findIndex((first, index) => {
        for (let i = index + 1; i < nums.length; i++) {
            const second = nums[i];
            if (first + second === target) {
                result = [index, i];
                return true;
            }
        }
        return false;
    })
    return result;
};

twoSum([3,2,3], 6)