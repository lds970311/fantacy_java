// AUTHOR: CSR丶SUSE
// TIME : 2021/9/2  10:59
// FILENAME: LongestCommonPrefix.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.leetcode.string;

//最长公共前缀

import org.junit.jupiter.api.Test;

/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * <p>
 * 如果不存在公共前缀，返回空字符串 ""。
 * <p>
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 */


public class LongestCommonPrefix {
    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) {
            return "";
        }
        String first = strs[0];
        for (int i = 1; i < strs.length; i++) {
            int j = 0;
            for (; j < first.length() && j < strs[i].length(); j++) {
                if (first.charAt(j) != strs[i].charAt(j)) {
                    break;
                }
            }
            first = first.substring(0, j);
            if (first.equals("")) {
                return first;
            }
        }
        return first;
    }

    @Test
    public void test() {
        String[] strs = {"flower", "flow", "flight"};
        System.out.println(longestCommonPrefix(strs)); //fl
    }
}
