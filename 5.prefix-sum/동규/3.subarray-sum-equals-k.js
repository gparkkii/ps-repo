// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function (nums, k) {
  let count = 0,
    sum = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
