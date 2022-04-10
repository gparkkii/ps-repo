from typing import List


class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        end_idx = max_idx = len(nums) - 1  # 4

        # 큰 수 위치 찾기
        while max_idx > 0 and nums[max_idx - 1] >= nums[max_idx]:
            max_idx -= 1

        # nums are in descending order
        if max_idx == 0:
            nums.reverse()
            return nums

        # find the last "ascending" position
        min_idx = max_idx - 1
        while nums[end_idx] <= nums[min_idx]:
            end_idx -= 1
        nums[min_idx], nums[end_idx] = nums[end_idx], nums[min_idx]
        # reverse the second part
        max, min = min_idx + 1, len(nums) - 1
        while max < min:
            nums[max], nums[min] = nums[min], nums[max]
            max += 1
            min -= 1
        return nums


print(Solution().nextPermutation([1, 1, 2, 6, 5]))
print(Solution().nextPermutation([3, 2, 1]))
print(Solution().nextPermutation([1, 2, 8, 6, 5]))
