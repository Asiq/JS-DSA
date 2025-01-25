// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

function twosum(nums, target) {

    let obj = {};

    for (let i = 0; i <= nums.length; i++) {
        var n = nums[i];

        if(obj[target - n] >= 0) {
            return [obj[target - n], i]
        } else {
            console.log('else :: ', i);
            obj[n] = i;
        }
    }

}

console.log(twosum([2,7,11,15], 9));

console.log(twosum([3, 2, 4], 6));