---
date: 2023-11-5
category:
  - 双指针
tag:
  - 简单
---

# 9.两个数组的交集II

给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```
1 <= nums1.length, nums2.length <= 1000
## 思路

寻找两个数组中相同的元素，可以先把两个数组进行排序，然后定义两个指针，分别指向两个数组，如果相同就把对应的元素收集起来，指针继续向后移动，如果不同就调整指针位置，继续判断。

```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        List<Integer> list = new ArrayList<>();
        for(int i = 0,j = 0;i < nums1.length && j < nums2.length;){
            if(nums1[i] > nums2[j]){
                j++;
            }else if(nums1[i] < nums2[j]){
                i++;
            }else{
                list.add(nums1[i]);
                i++;
                j++;
            }
        }
        int[] res = new int[list.size()];
        for(int i = 0;i < list.size();i++){
            res[i] = list.get(i);
        }
        return res;
    }
}
```