// AUTHOR: CSR丶SUSE
// TIME : 2021-09-26  13:06
// FILENAME: LeftOdd.java
// TOOLS : INTELLIJ IDEA
/**
 * 左奇右偶
 * <p>
 * 0个整数的数组{26,67,49,38,52,66,7,71,56,87}。
 * 元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
 */


package com.google.leetcode.array;


public class LeftOdd {

    public static void arrSort(int[] arr) {
        int len = arr.length;
        for (int i = 0; i < len - 1; i++) {
            //是偶数的话和后面的数交换
            for (int j = 0; j < len - 1 - i; j++) {
                if (arr[j] % 2 == 0) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {26, 67, 49, 38, 52, 66, 7, 71, 56, 87};
        arrSort(arr);
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}
