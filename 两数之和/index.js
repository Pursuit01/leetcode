function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let idx = nums.indexOf(target - nums[i]);
    if (idx !== -1) {
      if (idx !== i) {
        return [Math.min(i, idx), Math.max(i, idx)];
      } else {
        idx = nums.lastIndexOf(target - nums[i]);
        if (idx !== i) {
          return [Math.min(i, idx), Math.max(i, idx)];
        }
      }
    }
  }
  return [];
}

// let res = twoSum([2, 7, 11, 15], 9);
// console.log(res);
// let res = twoSum([3, 2, 4], 6);
// console.log(res);
let res = twoSum([3, 3], 7);
console.log(res);
