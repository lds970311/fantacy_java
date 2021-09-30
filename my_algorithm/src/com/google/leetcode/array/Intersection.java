package com.google.leetcode.array;

// Author : CSR丶SUSE
// Time ： 2021-09-30  22:31
// TOOLS : INTELLIJ IDEA
// FILENAME : Intersection.java
// STATEMENT: 


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Intersection {
    public static int[] getIntersection(int[] nums1, int[] nums2) {
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        for (int i : nums1) {
            list1.add(i);
        }
        for (int i : nums2) {
            list2.add(i);
        }
        boolean b = list1.retainAll(list2);
        int[] res = new int[list1.size()];
        for (int i = 0; i < list1.size(); i++) {
            res[i] = list1.get(i);
        }
        return res;
    }

    public static void main(String[] args) {
        int[] a1 = {1, 2, 2, 1};
        int[] a2 = {2, 2};
        int[] intersection = getIntersection(a1, a2);
        System.out.println(Arrays.toString(intersection));
    }
}
