// AUTHOR: CSR丶SUSE
// TIME : 2021-09-16  11:30
// FILENAME: Permutations.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.leetcode.recursive;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 全排列: 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案;
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
public class Permutations {
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> resultLists = new ArrayList<>();
        int n = nums.length;
        List<Integer> primed = new ArrayList<>();
        for (int num : nums) {
            primed.add(num);
        }
        getResults(n, resultLists, 0, primed);
        return resultLists;
    }

    public static void getResults(int n, List<List<Integer>> resultList, int first, List<Integer> prime) {
        if (first == n) {
            resultList.add(new ArrayList<>(prime));
        }
        for (int i = first; i < n; i++) {
            //交换两个元素位置
            Collections.swap(prime, i, first);
            //递归向右
            getResults(n, resultList, first + 1, prime);
            //撤销操作
            Collections.swap(prime, i, first);
        }
    }

    @Test
    public void permuteTest() {
        int[] nums = {1, 2, 3};
        List<List<Integer>> permute = permute(nums);
        System.out.println(permute);
    }
}
