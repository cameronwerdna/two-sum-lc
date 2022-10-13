let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9)) // => [0,1]
console.log(twoSum([2,3,11,8,1,7], 14)) // => [1,2]
console.log(twoSum([100, 23, 34, 4, 73], 77)) // => [3,4]