---
date: 2023-11-2
category:
  - 双指针
tag:
  - 中等
---

# 8.三数之和

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 。请找出所有和为 0 且 不重复 的三元组。

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

```
输入：nums = [0]
输出：[]
```

## 思路

题目可以拆解成两个要求，一个是和为0的三元组，一个是不重复的三元组，但是三元组里面的数字是可以重复的。

首先我们可以先把数字进行排序，如果三元组的第一个数字就是大于0的，那整个组肯定不满足要求，直接返回空的集合。

如果不大于0，可以固定一个数字，用双指针寻找另外两个数字，一个在i+1处，一个在数组尾处，大于0就右指针向左移动，小于0就左指针向右移动。

```java
class Solution{
    public List<List<Integer>> threeSum(int[] nums){
        List<List<Integer>> res = new ArrayList<>();
        if(nums == null || nums.length == 0){
            return res;
        }
        Arrays.sort(nums);
        for(int i = 0;i < nums.length;i++){
            if(nums[i] > 0){
                return res;
            }
            if(i > 0 && nums[i] == nums[i-1]){
                continue;
            }
            int l = i + 1;
            int r = nums.length-1;
            while(l < r){
                if(nums[i] + nums[l] + nums[r] > 0){
                    r--;
                }else if(nums[i] + nums[l] + nums[r] < 0){
                    l++;
                }else{
                    res.add(Arrays.asList(nums[i],nums[l],nums[r]));
                    // 去重逻辑
                    while(l < r && nums[r] == nums[r-1]){
                        r--;
                    }
                    while(l < r && nums[l] == nums[l+1]){
                        l++;
                    }
                    l++;
                    r--;
                }
            }
        }
        return res;
    }
}
```