function AddTwoSum(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // console.log(complement);
        if (map.has(complement)) {
            // console.log([map.get(complement), i]);
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i)
            console.log(map);
        }
    }
    return []
}
const twoSum = AddTwoSum([-2, 3, 11, 7], 9)
console.log(twoSum);